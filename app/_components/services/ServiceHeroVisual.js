import ServiceIllustration from "./ServiceIllustration";

const GRADIENTS = {
  "web-app-dev": "from-indigo-500 via-primary-600 to-indigo-800",
  "cloud-devops": "from-sky-500 via-blue-600 to-indigo-800",
  cybersecurity: "from-violet-500 via-primary-700 to-slate-900",
  "ai-automation": "from-fuchsia-500 via-primary-600 to-indigo-900",
};

export default function ServiceHeroVisual({ service, size = "card" }) {
  const gradient = GRADIENTS[service.id] ?? "from-primary-500 to-primary-800";
  const isHero = size === "hero";

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${gradient} ${
        isHero ? "aspect-[21/9] w-full" : "aspect-[4/3] w-full"
      }`}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, white 0, transparent 40%), radial-gradient(circle at 80% 70%, white 0, transparent 35%)",
        }}
        aria-hidden="true"
      />
      <ServiceIllustration
        serviceId={service.id}
        className={`relative ${isHero ? "h-full max-h-64 w-full max-w-xl" : "h-full w-full"}`}
      />
    </div>
  );
}
