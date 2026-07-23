import Link from "next/link";
import ServiceHeroVisual from "./ServiceHeroVisual";

export default function ServiceCard({ service }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <ServiceHeroVisual service={service} />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-medium text-neutral-900">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm text-neutral-600">
          {service.shortDescription}
        </p>
        <div className="mt-5 flex items-center gap-4">
          <Link
            href={`/services/${service.id}`}
            className="text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            Learn More →
          </Link>
          <Link
            href={`/intake?service=${service.id}`}
            className="ml-auto rounded-md bg-primary-600 px-4 py-2 text-xs font-medium text-white transition hover:bg-primary-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
