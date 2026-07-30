/**
 * Minimal maroon line-art vehicle icons.
 * strokeWidth stays ~1.4 for editorial feel.
 */
const base = {
  fill: "none",
  stroke: "#5C1A1A",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconSedan({ size = 64 }) {
  return (
    <svg width={size} height={size * 0.55} viewBox="0 0 120 66" {...base}>
      <path d="M6 46h108M14 46l10-22h48l16 12h20l6 10" />
      <circle cx="30" cy="50" r="6" />
      <circle cx="90" cy="50" r="6" />
      <path d="M32 46h56" />
    </svg>
  );
}

export function IconSUV({ size = 64 }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 120 72" {...base}>
      <path d="M6 50h108M14 50l6-24h68l14 14h12l4 10" />
      <circle cx="30" cy="54" r="6.5" />
      <circle cx="90" cy="54" r="6.5" />
      <path d="M28 50V30M62 50V30M28 30h48" />
    </svg>
  );
}

export function IconVan({ size = 64 }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 120 72" {...base}>
      <path d="M6 52h108M12 52V22h84l16 18v12" />
      <circle cx="32" cy="56" r="6.5" />
      <circle cx="94" cy="56" r="6.5" />
      <path d="M22 30h72M22 44h72M52 30v20" />
    </svg>
  );
}

export function IconBus({ size = 64 }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 120 72" {...base}>
      <path d="M6 54h108M12 54V18a6 6 0 016-6h84a6 6 0 016 6v36" />
      <circle cx="30" cy="58" r="6.5" />
      <circle cx="90" cy="58" r="6.5" />
      <path d="M18 26h84M42 26v22M66 26v22M90 26v22" />
    </svg>
  );
}

export function IconWheel({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" {...base}>
      <circle cx="16" cy="16" r="12" />
      <circle cx="16" cy="16" r="3" />
      <path d="M16 4v9M16 19v9M4 16h9M19 16h9" />
    </svg>
  );
}
