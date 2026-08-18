import { Link } from "@tanstack/react-router";
import { BRAND_CONFIG } from "@/config/brand";

/**
 * Hero — Hermès & Louis Vuitton Quiet Luxury Hero with Master Architectural Visuals.
 *
 * Directives:
 * - Desktop View: Full-screen 16:9 / widescreen responsive hero canvas.
 * - Mobile View: 9:16 aspect ratio dedicated mobile portrait canvas.
 * - Separate desktop and mobile image slots.
 * - H1 Headline: "Invisible Grills & Safety Nets" (35% increased size, Cormorant Garamond 300).
 * - Subtext: "Architectural safety for modern discerning homes." (35% increased size, Inter 300).
 * - Hermès signature orange solid CTA + framed exploration CTA.
 */
const Hero = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#FAF8F5] select-none h-[100dvh] min-h-[580px] md:min-h-[640px]"
      aria-label={`${BRAND_CONFIG.name} Architectural Safety Hero`}
    >
      {/* Desktop Visual Container (16:9 / Widescreen Hero Canvas) */}
      <div
        className="hidden md:block absolute inset-0 w-full h-full z-0"
        data-slot="desktop-hero-canvas"
      >
        <img
          src="/images/homepage/hero-desktop.jpg"
          alt="AMR Enterprises Widescreen Balcony Safety View"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Mobile Visual Container (9:16 Mobile Portrait Hero Canvas) */}
      <div
        className="md:hidden absolute inset-0 w-full h-full z-0"
        data-slot="mobile-hero-canvas-9-16"
      >
        <img
          src="/images/homepage/hero-mobile.jpg"
          alt="AMR Enterprises Architectural Safety — Mobile Balcony View (9:16)"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Warm Atmospheric Vignette for Pristine Color & Text Legibility */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(28,25,23,0.25) 0%, rgba(28,25,23,0.06) 40%, rgba(28,25,23,0.7) 100%)",
        }}
      />

      {/* Editorial Content Overlay (Lower-Third Placement) */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-14 sm:pb-20 md:pb-24 px-6 md:px-12 text-center">
        {/* Unified H1 Headline — 35% larger, bold, crisp contrast drop-shadow */}
        <h1
          className="font-serif font-light text-[1.4rem] sm:text-[1.8rem] md:text-[2.6rem] lg:text-[3.2rem] tracking-[0.16em] sm:tracking-[0.22em] text-white uppercase max-w-3xl leading-[1.22] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] mb-3 px-2"
          style={{ fontWeight: 300 }}
        >
          Invisible Grills &amp; Safety Nets
        </h1>

        {/* Unified Subtext Descriptor — 35% larger, crystal clear legibility */}
        <p
          className="font-sans font-light text-[0.88rem] sm:text-[1rem] md:text-[1.16rem] tracking-[0.03em] text-[#FAF8F5] max-w-lg leading-relaxed drop-shadow-[0_1.5px_8px_rgba(0,0,0,0.9)] mb-8 px-4"
          style={{ fontWeight: 300 }}
        >
          Architectural safety for modern discerning homes.
        </p>

        {/* Luxury Framed Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Link
            to="/consultation"
            className="sn-btn-luxury-solid w-full sm:w-auto px-8 py-3.5 sm:py-3 text-[10.5px] sm:text-[11.5px] tracking-[0.22em] focus-ring"
          >
            Request Site Survey
          </Link>
          <Link
            to="/solutions"
            className="sn-btn-luxury w-full sm:w-auto px-8 py-3.5 sm:py-3 text-[10.5px] sm:text-[11.5px] tracking-[0.22em] focus-ring"
          >
            Explore Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
