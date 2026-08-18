import { Link } from "@tanstack/react-router";
import { BRAND_CONFIG } from "@/config/brand";

/**
 * Hero — Hermès Quiet Luxury Hero with Master Architectural Visuals.
 *
 * Directives:
 * - Desktop & Mobile (9:16) high-resolution photography canvas.
 * - H1 Headline: "INVISIBLE GRILLS & SAFETY NETS" (Cormorant Garamond 300).
 * - Subtext: "Architectural safety for modern discerning homes." (Inter 300).
 * - Eyebrow: "AMR ENTERPRISES · ARCHITECTURAL SAFETY".
 * - Hermès signature orange solid CTA + framed exploration CTA.
 */
const Hero = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#FAF8F5] select-none"
      style={{ height: "100dvh", minHeight: "600px" }}
      aria-label={`${BRAND_CONFIG.name} Architectural Safety Hero`}
    >
      {/* Desktop Visual Container (Hero Image) */}
      <div
        className="hidden md:block absolute inset-0 w-full h-full z-0"
        data-slot="desktop-hero-canvas"
      >
        <img
          src="/images/homepage/hero-desktop.jpg"
          alt="AMR Enterprises Widescreen Balcony Safety View"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Mobile Visual Container (9:16 Aspect Ratio Image) */}
      <div
        className="md:hidden absolute inset-0 w-full h-full z-0"
        data-slot="mobile-hero-canvas-9-16"
      >
        <img
          src="/images/homepage/hero-mobile.jpg"
          alt="AMR Enterprises Architectural Safety — Mobile Balcony View"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Warm Atmospheric Vignette to preserve photography brilliance while boosting legibility */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(28,25,23,0.2) 0%, rgba(28,25,23,0.05) 50%, rgba(28,25,23,0.6) 100%)",
        }}
      />

      {/* Editorial Content Overlay (Lower-Third Placement) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-16 sm:pb-20 md:pb-24 px-6 md:px-12 text-center">
        {/* Unified H1 Headline with crisp contrast drop-shadow */}
        <h1 className="sn-h1 text-white max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] mb-3">
          Invisible Grills &amp; Safety Nets
        </h1>

        {/* Unified Subtext Descriptor */}
        <p className="sn-subtext text-[#FAF8F5] max-w-md drop-shadow-[0_1.5px_6px_rgba(0,0,0,0.85)] mb-8">
          Architectural safety for modern discerning homes.
        </p>

        {/* Luxury Framed Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/consultation"
            className="sn-btn-luxury-solid focus-ring"
          >
            Request Site Survey
          </Link>
          <Link
            to="/solutions"
            className="sn-btn-luxury focus-ring"
          >
            Explore Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
