import { getSiteSettings } from "@/app/_lib/data-service";
import SettingsForm from "@/app/_components/admin/SettingsForm";
import { SITE_CONFIG } from "@/app/_lib/siteConfig";

export default async function AdminSettingsPage() {
  const settings = await getSiteSettings();

  const initialSettings = settings || {
    contact_email: SITE_CONFIG.contact.email,
    contact_phone: SITE_CONFIG.contact.phone,
    contact_address: SITE_CONFIG.contact.address,
  };

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-neutral-900">Settings</h1>
      <SettingsForm initialSettings={initialSettings} />
    </div>
  );
}
