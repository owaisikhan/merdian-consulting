import ContactForm from "@/app/_components/contact/ContactForm";
import { getSiteSettings } from "@/app/_lib/data-service";
import { SITE_CONFIG } from "@/app/_lib/siteConfig";

export default async function ContactPage() {
  const settings = await getSiteSettings();
  const contact = settings
    ? {
        email: settings.contact_email,
        phone: settings.contact_phone,
        address: settings.contact_address,
      }
    : SITE_CONFIG.contact;

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:py-20">
      <h1 className="text-3xl font-semibold text-neutral-900">Contact Us</h1>
      <p className="mt-4 text-neutral-600">
        Have a quick question before starting a project? Send us a message
        below, or{" "}
        <a href="/intake" className="text-primary-600 hover:underline">
          start a full project inquiry
        </a>
        .
      </p>

      <div className="mt-10">
        <ContactForm />
      </div>

      <div className="mt-12 border-t border-neutral-200 pt-8 text-sm text-neutral-600">
        <p>{contact.address}</p>
        <p className="mt-1">
          {contact.phone} · {contact.email}
        </p>
      </div>
    </div>
  );
}
