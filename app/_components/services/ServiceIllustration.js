function WebAppScene() {
  return (
    <>
      <rect x="70" y="60" width="260" height="170" rx="10" fill="white" fillOpacity="0.14" />
      <rect x="70" y="60" width="260" height="30" rx="10" fill="white" fillOpacity="0.22" />
      <circle cx="88" cy="75" r="4" fill="white" fillOpacity="0.6" />
      <circle cx="102" cy="75" r="4" fill="white" fillOpacity="0.6" />
      <circle cx="116" cy="75" r="4" fill="white" fillOpacity="0.6" />
      <rect x="90" y="105" width="160" height="10" rx="5" fill="white" fillOpacity="0.35" />
      <rect x="90" y="125" width="110" height="10" rx="5" fill="white" fillOpacity="0.25" />
      <rect x="90" y="150" width="70" height="55" rx="8" fill="white" fillOpacity="0.18" />
      <rect x="170" y="150" width="70" height="55" rx="8" fill="white" fillOpacity="0.25" />
      <rect x="250" y="150" width="60" height="55" rx="8" fill="white" fillOpacity="0.18" />
      <path
        d="M147 40 133 55 147 70M183 40 197 55 183 70"
        stroke="white"
        strokeOpacity="0.85"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  );
}

function CloudDevOpsScene() {
  return (
    <>
      <path
        d="M110 165c-19 0-34-15-34-33 0-17 13-31 30-33 5-19 22-33 43-33 22 0 41 16 45 37 1 0 3-1 5-1 16 0 29 13 29 29s-13 29-29 29H110Z"
        fill="white"
        fillOpacity="0.22"
      />
      <rect x="70" y="185" width="55" height="16" rx="4" fill="white" fillOpacity="0.3" />
      <rect x="70" y="207" width="55" height="16" rx="4" fill="white" fillOpacity="0.22" />
      <circle cx="82" cy="193" r="3" fill="white" />
      <circle cx="82" cy="215" r="3" fill="white" fillOpacity="0.6" />
      <rect x="270" y="185" width="55" height="16" rx="4" fill="white" fillOpacity="0.3" />
      <rect x="270" y="207" width="55" height="16" rx="4" fill="white" fillOpacity="0.22" />
      <circle cx="282" cy="193" r="3" fill="white" />
      <circle cx="282" cy="215" r="3" fill="white" fillOpacity="0.6" />
      <path
        d="M148 190c10 12 24 20 40 20M252 190c-10 12-24 20-40 20"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="3"
        strokeDasharray="2 6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M180 60c8-4 16 4 12 12"
        stroke="white"
        strokeOpacity="0.8"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M186 66l6 6 8-10" stroke="white" strokeOpacity="0.9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </>
  );
}

function CybersecurityScene() {
  return (
    <>
      <path
        d="M200 45 265 68v55c0 45-27 76-65 92-38-16-65-47-65-92V68l65-23Z"
        fill="white"
        fillOpacity="0.18"
      />
      <path
        d="M200 60 251 78v45c0 37-22 62-51 75-29-13-51-38-51-75V78l51-18Z"
        fill="white"
        fillOpacity="0.14"
      />
      <circle cx="200" cy="128" r="20" fill="white" fillOpacity="0.3" />
      <path d="M190 128l7 8 15-17" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path
        d="M110 190c-8 6-8 16 0 22M290 190c8 6 8 16 0 22"
        stroke="white"
        strokeOpacity="0.5"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </>
  );
}

function AiAutomationScene() {
  return (
    <>
      <circle cx="200" cy="135" r="26" fill="white" fillOpacity="0.28" />
      <circle cx="200" cy="135" r="10" fill="white" fillOpacity="0.85" />
      {[
        [120, 80],
        [280, 80],
        [110, 190],
        [290, 190],
        [200, 60],
        [200, 210],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <line
            x1="200"
            y1="135"
            x2={cx}
            y2={cy}
            stroke="white"
            strokeOpacity="0.35"
            strokeWidth="2"
          />
          <circle cx={cx} cy={cy} r="8" fill="white" fillOpacity="0.5" />
        </g>
      ))}
      <path
        d="M200 100v-8M200 178v-8M165 135h-8M243 135h-8"
        stroke="white"
        strokeOpacity="0.6"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </>
  );
}

const SCENES = {
  "web-app-dev": WebAppScene,
  "cloud-devops": CloudDevOpsScene,
  cybersecurity: CybersecurityScene,
  "ai-automation": AiAutomationScene,
};

export default function ServiceIllustration({ serviceId, className = "h-full w-full" }) {
  const Scene = SCENES[serviceId] ?? AiAutomationScene;

  return (
    <svg
      viewBox="0 0 400 260"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <Scene />
    </svg>
  );
}
