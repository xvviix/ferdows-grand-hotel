export default function Logo({ size = 40 }) {
  return (
    <svg
      className="brand__mark"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      {/* eight-pointed Persian star / khatam motif */}
      <g stroke="currentColor" strokeWidth="1">
        <path d="M24 6 L28 16 L38 12 L32 20 L44 24 L32 28 L38 38 L28 32 L24 44 L20 32 L10 38 L16 28 L4 24 L16 20 L10 12 L20 16 Z" />
      </g>
      {/* inner diamond */}
      <path d="M24 17 L31 24 L24 31 L17 24 Z" stroke="currentColor" strokeWidth="1" />
      {/* monogram F */}
      <path
        d="M20.5 29 V19 h7 M20.5 24 h5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
    </svg>
  );
}
