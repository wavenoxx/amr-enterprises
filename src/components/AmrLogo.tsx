/**
 * AMR Enterprises — Official Brand Logo & Monogram Assets.
 *
 * Utilizes authentic extracted high-resolution assets from the official AMR brand identity:
 * - AMR Monogram: Intertwined M, A, R with architectural cathedral arch & 4-pane gold window emblem (田).
 * - Full Brand Logo: Monogram + fine divider + tracked 'AMR ENTERPRISES' lettermark + gold diamond.
 */

interface AmrMonogramProps {
  className?: string;
  isDark?: boolean;
  alt?: string;
}

export function AmrMonogram({
  className = "h-10 sm:h-12 w-auto",
  isDark = false,
  alt = "AMR Enterprises Brand Monogram",
}: AmrMonogramProps) {
  return (
    <img
      src={isDark ? "/images/brand/amr-monogram-dark.png" : "/images/brand/amr-monogram-white.png"}
      alt={alt}
      className={`object-contain transition-opacity duration-300 ${className}`}
      loading="eager"
      decoding="async"
    />
  );
}

interface AmrLogoProps {
  className?: string;
  variant?: "monogram" | "full";
  isDark?: boolean;
  alt?: string;
}

export function AmrLogo({
  className = "h-10 w-auto",
  variant = "full",
  isDark = true,
  alt = "AMR Enterprises",
}: AmrLogoProps) {
  if (variant === "monogram") {
    return <AmrMonogram className={className} isDark={isDark} alt={alt} />;
  }

  return (
    <img
      src={isDark ? "/images/brand/amr-full-dark.png" : "/images/brand/amr-full-white.png"}
      alt={alt}
      className={`object-contain transition-opacity duration-300 ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}

export default AmrLogo;
