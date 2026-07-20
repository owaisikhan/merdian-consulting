"use client";

import { useIntakeForm } from "./IntakeFormContext";

export default function StepContactInfo() {
  const { formData, updateField, nextStep } = useIntakeForm();

  function handleSubmit(e) {
    e.preventDefault();
    nextStep();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-neutral-900">
        Your Contact Info
      </h2>

      <div>
        <label
          htmlFor="fullName"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          value={formData.fullName}
          onChange={(e) => updateField("fullName", e.target.value)}
          required
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          required
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Phone <span className="text-neutral-400">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-primary-600 px-6 py-2 text-sm font-medium text-white hover:bg-primary-700"
      >
        Continue
      </button>
    </form>
  );
}
