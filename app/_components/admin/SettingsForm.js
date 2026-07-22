"use client";

import { useState } from "react";
import { updateSiteSettings } from "@/app/_lib/actions";

export default function SettingsForm({ initialSettings }) {
  const [contactEmail, setContactEmail] = useState(initialSettings.contact_email);
  const [contactPhone, setContactPhone] = useState(initialSettings.contact_phone);
  const [contactAddress, setContactAddress] = useState(initialSettings.contact_address);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const result = await updateSiteSettings({
      contactEmail,
      contactPhone,
      contactAddress,
    });

    setIsSubmitting(false);

    if (!result.success) {
      setMessage({ type: "error", text: result.error });
      return;
    }

    setMessage({ type: "success", text: "Settings updated." });
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
      <div>
        <label
          htmlFor="contactEmail"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Contact Email
        </label>
        <input
          id="contactEmail"
          type="email"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
          required
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>

      <div>
        <label
          htmlFor="contactPhone"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Contact Phone
        </label>
        <input
          id="contactPhone"
          type="tel"
          value={contactPhone}
          onChange={(e) => setContactPhone(e.target.value)}
          required
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>

      <div>
        <label
          htmlFor="contactAddress"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Address
        </label>
        <input
          id="contactAddress"
          type="text"
          value={contactAddress}
          onChange={(e) => setContactAddress(e.target.value)}
          required
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>

      {message && (
        <p
          className={`text-sm ${message.type === "error" ? "text-red-600" : "text-primary-700"}`}
          role="status"
        >
          {message.text}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-md bg-primary-600 px-6 py-2 text-sm font-medium text-white hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
}
