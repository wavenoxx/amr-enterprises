/**
 * AMR Enterprises — Signature Brand Monogram & Lettermark Component.
 *
 * Modeled after the official AMR intertwined monogram:
 * - Intertwined architectural A-M-R monogram with cathedral arch.
 * - 4-pane golden window emblem (田) in warm architectural gold (#C5A880 / #D4AF37).
 * - Adapts dynamically to light/dark themes and scroll states.
 */

interface AmrLogoProps {
  className?: string;
  variant?: "monogram" | "full" | "horizontal";
  color?: string;
  goldColor?: string;
}

export function AmrMonogram({
  className = "w-8 h-8",
  color = "currentColor",
  goldColor = "#C5A880",
}: {
  className?: string;
  color?: string;
  goldColor?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AMR Enterprises Monogram"
    >
      {/* 4-Pane Architectural Gold Window Emblem */}
      <g fill={goldColor}>
        <rect x="91" y="132" width="7.5" height="7.5" rx="0.5" />
        <rect x="101.5" y="132" width="7.5" height="7.5" rx="0.5" />
        <rect x="91" y="142.5" width="7.5" height="7.5" rx="0.5" />
        <rect x="101.5" y="142.5" width="7.5" height="7.5" rx="0.5" />
      </g>

      {/* Intertwined A-M-R Monogram Structure */}
      {/* Left 'M' stem & arch */}
      <path
        d="M 38 148 L 44 148 L 44 80 L 38 80 L 38 75 L 56 75 L 56 80 L 50 80 L 50 142 C 50 142 54 110 70 85 C 80 70 88 62 88 62 L 78 126 C 78 126 70 142 58 148 L 38 148 Z"
        fill={color}
      />

      {/* Soaring 'A' Arch / Apex & Center Cross-flow */}
      <path
        d="M 100 12 L 105 15 L 126 88 C 132 108 136 128 136 148 L 122 148 C 122 136 119 116 114 96 L 94 28 L 74 98 C 66 122 62 138 62 148 L 48 148 C 48 136 54 114 64 88 L 96 12 Z"
        fill={color}
      />

      {/* 'R' Shoulder & Flowing Calligraphic Leg */}
      <path
        d="M 118 78 C 126 74 136 72 146 72 C 162 72 174 80 174 96 C 174 108 166 118 152 122 C 158 128 166 138 178 148 L 194 148 C 182 136 172 124 164 114 C 176 108 184 98 184 86 C 184 66 168 58 144 58 C 132 58 122 62 114 66 L 118 78 Z"
        fill={color}
      />

      {/* R inner loop cutout & inner shadow contour */}
      <path
        d="M 132 76 C 140 76 156 78 156 94 C 156 108 142 112 132 112 L 124 112 L 124 76 L 132 76 Z"
        fill={color}
      />

      {/* Central Architectural Cathedral Archway framing the Window */}
      <path
        d="M 68 148 C 68 120 80 96 100 96 C 120 96 132 120 132 148 L 126 148 C 126 124 116 102 100 102 C 84 102 74 124 74 148 L 68 148 Z"
        fill={color}
      />
    </svg>
  );
}

export function AmrLogo({
  className = "",
  variant = "full",
  color = "currentColor",
  goldColor = "#C5A880",
}: AmrLogoProps) {
  if (variant === "monogram") {
    return <AmrMonogram className={className || "w-7 h-7 sm:w-8 sm:h-8"} color={color} goldColor={goldColor} />;
  }

  if (variant === "horizontal") {
    return (
      <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
        <AmrMonogram className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" color={color} goldColor={goldColor} />
        <div className="flex flex-col text-left">
          <span
            className="font-serif tracking-[0.28em] text-[13px] sm:text-[15px] uppercase font-light leading-tight"
            style={{ fontWeight: 300 }}
          >
            AMR
          </span>
          <span
            className="text-[7.5px] sm:text-[8.5px] font-mono tracking-[0.3em] uppercase opacity-75 leading-tight"
            style={{ color: goldColor }}
          >
            ENTERPRISES
          </span>
        </div>
      </div>
    );
  }

  // Full stacked logo
  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <AmrMonogram className="w-9 h-9 sm:w-11 sm:h-11 mb-1.5" color={color} goldColor={goldColor} />
      <span
        className="font-serif tracking-[0.32em] text-[12px] sm:text-[14px] uppercase font-light leading-none"
        style={{ fontWeight: 300 }}
      >
        AMR ENTERPRISES
      </span>
      <div className="flex items-center justify-center gap-2 w-full max-w-[110px] mt-1 opacity-70">
        <span className="h-px flex-1 bg-current" />
        <span className="w-1 h-1 rotate-45" style={{ backgroundColor: goldColor }} />
        <span className="h-px flex-1 bg-current" />
      </div>
    </div>
  );
}

export default AmrLogo;
