import sharp from "sharp";
import path from "path";
import fs from "fs";

const inputPath = path.resolve("./public/images/brand-logo.jpg");
const outDir = path.resolve("./public/images/brand");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function processLogo() {
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  console.log("Source image metadata:", metadata);

  // Read raw pixel buffer
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;

  // Background sample at corners (approx beige / off-white paper color)
  // Let's sample top-left 20x20 pixels
  let bgR = 0, bgG = 0, bgB = 0, count = 0;
  for (let y = 0; y < 30; y++) {
    for (let x = 0; x < 30; x++) {
      const idx = (y * width + x) * 4;
      bgR += data[idx];
      bgG += data[idx + 1];
      bgB += data[idx + 2];
      count++;
    }
  }
  bgR /= count;
  bgG /= count;
  bgB /= count;
  console.log("Detected background color RGB:", bgR, bgG, bgB);

  // We will create two buffers:
  // 1. Dark logo on transparent background
  // 2. White logo on transparent background (retaining gold window/ornaments)
  const darkData = Buffer.alloc(width * height * 4);
  const whiteData = Buffer.alloc(width * height * 4);

  let minX = width, maxX = 0, minY = height, maxY = 0;
  let monogramMinX = width, monogramMaxX = 0, monogramMinY = height, monogramMaxY = 0;

  // Monogram area is roughly y: 20% to 60%, Full logo is y: 20% to 75%
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      // Distance from background
      const dist = Math.sqrt(
        Math.pow(r - bgR, 2) + Math.pow(g - bgG, 2) + Math.pow(b - bgB, 2)
      );

      // Smooth alpha ramp
      let alpha = 0;
      if (dist > 18) {
        alpha = Math.min(255, Math.max(0, Math.round(((dist - 18) / 35) * 255)));
      }

      if (alpha > 30) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;

        if (y < height * 0.60) {
          if (x < monogramMinX) monogramMinX = x;
          if (x > monogramMaxX) monogramMaxX = x;
          if (y < monogramMinY) monogramMinY = y;
          if (y > monogramMaxY) monogramMaxY = y;
        }
      }

      // Check if it's the gold accent (window/diamond)
      // Gold in this image is yellowish-brown (higher R and G than B)
      const isGold = (r > 140 && g > 110 && b < 100 && (r - b) > 40);

      // Dark logo buffer
      darkData[idx] = isGold ? r : Math.min(r, 28);
      darkData[idx + 1] = isGold ? g : Math.min(g, 25);
      darkData[idx + 2] = isGold ? b : Math.min(b, 23);
      darkData[idx + 3] = alpha;

      // White logo buffer
      if (isGold) {
        whiteData[idx] = 218;
        whiteData[idx + 1] = 175;
        whiteData[idx + 2] = 100;
      } else {
        whiteData[idx] = 255;
        whiteData[idx + 1] = 255;
        whiteData[idx + 2] = 255;
      }
      whiteData[idx + 3] = alpha;
    }
  }

  console.log("Full logo bounds:", { minX, maxX, minY, maxY });
  console.log("Monogram bounds:", { monogramMinX, monogramMaxX, monogramMinY, monogramMaxY });

  // Add small padding
  const pad = 12;
  const monoCrop = {
    left: Math.max(0, monogramMinX - pad),
    top: Math.max(0, monogramMinY - pad),
    width: Math.min(width, monogramMaxX - monogramMinX + pad * 2),
    height: Math.min(height, monogramMaxY - monogramMinY + pad * 2),
  };

  const fullCrop = {
    left: Math.max(0, minX - pad),
    top: Math.max(0, minY - pad),
    width: Math.min(width, maxX - minX + pad * 2),
    height: Math.min(height, maxY - minY + pad * 2),
  };

  // Save dark monogram
  await sharp(darkData, { raw: { width, height, channels: 4 } })
    .extract(monoCrop)
    .png()
    .toFile(path.join(outDir, "amr-monogram-dark.png"));

  // Save white monogram
  await sharp(whiteData, { raw: { width, height, channels: 4 } })
    .extract(monoCrop)
    .png()
    .toFile(path.join(outDir, "amr-monogram-white.png"));

  // Save full dark logo
  await sharp(darkData, { raw: { width, height, channels: 4 } })
    .extract(fullCrop)
    .png()
    .toFile(path.join(outDir, "amr-full-dark.png"));

  // Save full white logo
  await sharp(whiteData, { raw: { width, height, channels: 4 } })
    .extract(fullCrop)
    .png()
    .toFile(path.join(outDir, "amr-full-white.png"));

  console.log("Successfully generated all transparent logo assets in public/images/brand/!");
}

processLogo().catch(console.error);
