export default function LogoIcon({ className = "h-9 w-9", size = 36 }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <rect width="100" height="100" rx="22" fill="#5C1A1A" />
      <rect x="4" y="4" width="92" height="92" rx="18" fill="none" stroke="#B08D57" strokeWidth="2.5" opacity="0.7" />
      <circle cx="50" cy="50" r="32" fill="none" stroke="#B08D57" strokeWidth="4" />
      <path d="M26 50 Q 50 30 74 50" fill="none" stroke="#FAF7F2" strokeWidth="4" strokeLinecap="round" />
      <path d="M32 64 L 50 50 L 68 64" fill="none" stroke="#B08D57" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50" cy="38" r="5" fill="#FAF7F2" />
    </svg>
  );
}
