"use client";

import { useIntakeForm } from "./IntakeFormContext";
import { SERVICES } from "@/app/_data/services";

export default function StepServiceSelect() {
  const { formData, updateField, nextStep, prevStep } = useIntakeForm();

  function handleSelect(serviceId) {
    updateField("serviceId", serviceId);
  }

  function handleContinue() {
    if (formData.serviceId) {
      nextStep();
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-neutral-900">
        Which service are you interested in?
      </h2>

      <div
        role="radiogroup"
        aria-label="Select a service"
        className="grid gap-3 sm:grid-cols-2"
      >
        {SERVICES.map((service) => {
          const isSelected = formData.serviceId === service.id;
          return (
            <button
              key={service.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => handleSelect(service.id)}
              className={`rounded-lg border p-4 text-left transition ${
                isSelected
                  ? "border-primary-600 bg-primary-50"
                  : "border-neutral-200 bg-white hover:border-neutral-300"
              }`}
            >
              <p className="font-medium text-neutral-900">{service.name}</p>
              <p className="mt-1 text-sm text-neutral-600">
                {service.shortDescription}
              </p>
            </button>
          );
        })}
      </div>

      <div className="flex justify-between pt-2">
        <button
          type="button"
          onClick={prevStep}
          className="rounded-md border border-neutral-300 px-6 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleContinue}
          disabled={!formData.serviceId}
          className="rounded-md bg-primary-600 px-6 py-2 text-sm font-medium text-white hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
