import { getSiteSettings } from "@/app/_lib/data-service";
import { SITE_CONFIG } from "@/app/_lib/siteConfig";

export default async function Footer() {
  const settings = await getSiteSettings();
  const contact = settings
    ? {
        email: settings.contact_email,
        phone: settings.contact_phone,
        address: settings.contact_address,
      }
    : SITE_CONFIG.contact;

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-600">
        <p className="font-medium text-neutral-900">{SITE_CONFIG.firmName}</p>
        <p className="mt-1">{contact.address}</p>
        <p className="mt-1">
          {contact.phone} · {contact.email}
        </p>
        <p className="mt-4 text-neutral-400">
          © {new Date().getFullYear()} {SITE_CONFIG.firmName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
