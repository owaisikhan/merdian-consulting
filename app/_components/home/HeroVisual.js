export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-md">
      <svg
        viewBox="0 0 480 360"
        className="h-full w-full"
        role="img"
        aria-label="Illustration of a dashboard interface"
      >
        <defs>
          <linearGradient id="heroBg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#3730a3" />
          </linearGradient>
        </defs>

        <rect width="480" height="360" rx="28" fill="url(#heroBg)" />

        <circle cx="430" cy="40" r="70" fill="white" fillOpacity="0.06" />
        <circle cx="40" cy="330" r="90" fill="white" fillOpacity="0.05" />

        <g transform="translate(70,60)">
          <rect
            width="300"
            height="200"
            rx="14"
            fill="white"
            fillOpacity="0.97"
          />
          <circle cx="22" cy="22" r="5" fill="#fca5a5" />
          <circle cx="40" cy="22" r="5" fill="#fcd34d" />
          <circle cx="58" cy="22" r="5" fill="#6ee7b7" />

          <rect
            x="20"
            y="44"
            width="130"
            height="10"
            rx="5"
            fill="#c7d2fe"
          />
          <rect
            x="20"
            y="62"
            width="200"
            height="8"
            rx="4"
            fill="#e5e7eb"
          />

          <polyline
            points="20,150 65,120 110,138 155,90 200,105 245,70 280,85"
            fill="none"
            stroke="#4f46e5"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="280" cy="85" r="6" fill="#4f46e5" />

          <rect x="20" y="170" width="52" height="14" rx="7" fill="#eef2ff" />
          <rect x="82" y="170" width="52" height="14" rx="7" fill="#eef2ff" />
          <rect x="144" y="170" width="52" height="14" rx="7" fill="#eef2ff" />
        </g>

        <g transform="translate(345,225)">
          <rect
            width="72"
            height="72"
            rx="16"
            fill="white"
            fillOpacity="0.97"
          />
          <path
            d="M20 38 L32 50 L54 24"
            fill="none"
            stroke="#16a34a"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        <g transform="translate(30,20)">
          <rect
            width="60"
            height="60"
            rx="14"
            fill="white"
            fillOpacity="0.97"
          />
          <path
            d="M30 16 a14 14 0 1 0 0.01 0"
            fill="none"
            stroke="#4f46e5"
            strokeWidth="5"
          />
          <path
            d="M30 22 v9 l7 5"
            fill="none"
            stroke="#4f46e5"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
