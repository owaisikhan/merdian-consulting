import { SITE_CONFIG } from "@/app/_lib/siteConfig";
import { SERVICES } from "@/app/_data/services";
import { TESTIMONIALS } from "@/app/_data/testimonials";
import HeroIntro from "@/app/_components/home/HeroIntro";
import ServiceCard from "@/app/_components/services/ServiceCard";
import ScrollReveal from "@/app/_components/ui/ScrollReveal";
import InitialsAvatar from "@/app/_components/ui/InitialsAvatar";

export default function HomePage() {
  return (
    <div>
      <HeroIntro tagline={SITE_CONFIG.tagline} blurb={SITE_CONFIG.aboutBlurb} />

      {/* Services */}
      <section
        id="services"
        className="border-t border-neutral-200 bg-neutral-50 py-20"
      >
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold text-neutral-900">
              Our Services
            </h2>
            <p className="mt-2 max-w-2xl text-neutral-600">
              Practical, hands-on help — pick the area you need and see how we
              approach it.
            </p>
          </ScrollReveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, index) => (
              <ScrollReveal
                key={service.id}
                delay={index * 0.08}
                className="h-full"
              >
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-neutral-200 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold text-neutral-900">
              What Clients Say
            </h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {TESTIMONIALS.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id} delay={index * 0.08}>
                <blockquote className="rounded-lg border border-neutral-200 bg-white p-6 h-full">
                  <p className="text-neutral-700">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-4 flex items-center gap-3">
                    <InitialsAvatar name={testimonial.name} />
                    <div className="text-sm font-medium text-neutral-900">
                      {testimonial.name}
                      <span className="block font-normal text-neutral-500">
                        {testimonial.company}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
