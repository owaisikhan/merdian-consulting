import Image from "next/image";

const IMAGE_SRC = {
  "web-app-dev": "/services/web-app-dev.png",
  "cloud-devops": "/services/cloud-devops.png",
  cybersecurity: "/services/cybersecurity.png",
  "ai-automation": "/services/ai-automation.png",
};

export default function ServiceHeroVisual({ service, size = "card" }) {
  const src = IMAGE_SRC[service.id];
  const isHero = size === "hero";

  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl">
      <Image
        src={src}
        alt={service.name}
        fill
        sizes={isHero ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
        priority={isHero}
        className="object-cover"
      />
    </div>
  );
}
