import { getSiteSettings } from "@/app/_lib/data-service";
import { SITE_CONFIG } from "@/app/_lib/siteConfig";
import AboutHeroIllustration from "@/app/_components/about/AboutHeroIllustration";

export default async function AboutPage() {
  const settings = await getSiteSettings();
  const contact = settings
    ? {
        email: settings.contact_email,
        phone: settings.contact_phone,
        address: settings.contact_address,
      }
    : SITE_CONFIG.contact;

  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="text-3xl font-semibold text-neutral-900">
        About {SITE_CONFIG.firmName}
      </h1>

      <AboutHeroIllustration className="mt-8 aspect-[21/9] w-full" />

      <p className="mt-8 text-neutral-700">{SITE_CONFIG.aboutBlurb}</p>

      <h2 className="mt-12 text-xl font-semibold text-neutral-900">
        Our Approach
      </h2>
      <p className="mt-4 text-neutral-700">
        We believe good technology work starts with listening. Every
        engagement begins with understanding what you actually need — not
        what's trendiest — and ends with something your team can maintain
        long after we've handed it off.
      </p>

      <h2 className="mt-12 text-xl font-semibold text-neutral-900">
        Contact
      </h2>
      <address className="mt-4 not-italic text-neutral-700">
        {contact.address}
        <br />
        {contact.phone}
        <br />
        {contact.email}
      </address>
    </div>
  );
}
