const GRADIENTS = [
  ["#6366f1", "#4338ca"],
  ["#0ea5e9", "#4338ca"],
  ["#8b5cf6", "#312e81"],
  ["#d946ef", "#4338ca"],
];

function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function InitialsAvatar({ name, className = "h-11 w-11" }) {
  const [from, to] = GRADIENTS[hashString(name) % GRADIENTS.length];
  const gradientId = `avatar-${hashString(name)}`;

  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="20" fill={`url(#${gradientId})`} />
      <text
        x="20"
        y="21"
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize="14"
        fontWeight="600"
        fontFamily="inherit"
      >
        {getInitials(name)}
      </text>
    </svg>
  );
}
