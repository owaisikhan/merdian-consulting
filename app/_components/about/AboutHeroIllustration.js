function Person({ x, y = 55 }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle cx="0" cy="0" r="16" fill="white" fillOpacity="0.85" />
      <path
        d="M-24 42c0-16 10-26 24-26s24 10 24 26"
        fill="white"
        fillOpacity="0.55"
      />
    </g>
  );
}

export default function AboutHeroIllustration({ className = "h-full w-full" }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 via-primary-600 to-indigo-900 ${className}`}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, white 0, transparent 40%), radial-gradient(circle at 85% 75%, white 0, transparent 35%)",
        }}
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 300 140"
        className="relative h-full w-full max-w-md"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <line
          x1="90"
          y1="55"
          x2="150"
          y2="55"
          stroke="white"
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeDasharray="2 6"
        />
        <line
          x1="150"
          y1="55"
          x2="210"
          y2="55"
          stroke="white"
          strokeOpacity="0.4"
          strokeWidth="2"
          strokeDasharray="2 6"
        />
        <Person x={90} />
        <Person x={150} y={45} />
        <Person x={210} />
        <circle cx="150" cy="45" r="34" fill="none" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
