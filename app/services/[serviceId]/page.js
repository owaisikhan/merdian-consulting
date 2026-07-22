import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, getServiceById } from "@/app/_data/services";
import ServiceHeroVisual from "@/app/_components/services/ServiceHeroVisual";
import ScrollReveal from "@/app/_components/ui/ScrollReveal";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ serviceId: service.id }));
}

export async function generateMetadata({ params }) {
  const { serviceId } = await params;
  const service = getServiceById(serviceId);
  if (!service) return {};
  return {
    title: `${service.name} | Meridian Digital Consulting`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { serviceId } = await params;
  const service = getServiceById(serviceId);

  if (!service) {
    notFound();
  }

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Link
          href="/#services"
          className="text-sm font-medium text-primary-600 hover:text-primary-700"
        >
          ← All Services
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              {service.name}
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              {service.heroTagline}
            </p>
            <p className="mt-4 text-neutral-600">{service.fullDescription}</p>
            <Link
              href={`/intake?service=${service.id}`}
              className="mt-8 inline-block rounded-md bg-primary-600 px-6 py-3 text-sm font-medium text-white hover:bg-primary-700"
            >
              Get Started
            </Link>
          </div>
          <ServiceHeroVisual service={service} size="hero" />
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold text-neutral-900">
              Why it works
            </h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {service.benefits.map((benefit, index) => (
              <ScrollReveal
                key={benefit}
                delay={index * 0.06}
                className="flex gap-3 rounded-lg border border-neutral-200 bg-white p-5"
              >
                <span className="mt-0.5 text-primary-600">✓</span>
                <p className="text-neutral-700">{benefit}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold text-neutral-900">
              How we work
            </h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 0.08}>
                <div className="rounded-lg border border-neutral-200 bg-white p-5">
                  <span className="text-xs font-semibold text-primary-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-medium text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    {step.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-primary-600 py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-2xl font-semibold text-white">
            Ready to talk about {service.name.toLowerCase()}?
          </h2>
          <p className="mt-3 text-primary-50">
            Tell us about your project and we&apos;ll follow up with next
            steps.
          </p>
          <Link
            href={`/intake?service=${service.id}`}
            className="mt-6 inline-block rounded-md bg-white px-6 py-3 text-sm font-medium text-primary-700 hover:bg-primary-50"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
