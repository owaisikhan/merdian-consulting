"use client";

import { useState } from "react";
import { useIntakeForm } from "./IntakeFormContext";
import { SERVICES } from "@/app/_data/services";
import { submitLead } from "@/app/_lib/actions";

export default function StepReviewSubmit({ onSubmitted }) {
  const { formData, prevStep, resetForm } = useIntakeForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const selectedService = SERVICES.find((s) => s.id === formData.serviceId);

  async function handleSubmit() {
    setIsSubmitting(true);
    setError(null);

    const result = await submitLead(formData);

    setIsSubmitting(false);

    if (!result.success) {
      setError(result.error);
      return;
    }

    resetForm();
    onSubmitted();
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-neutral-900">
        Review Your Submission
      </h2>

      <dl className="space-y-3 rounded-lg border border-neutral-200 bg-white p-4 text-sm">
        <div>
          <dt className="font-medium text-neutral-700">Name</dt>
          <dd className="text-neutral-600">{formData.fullName}</dd>
        </div>
        <div>
          <dt className="font-medium text-neutral-700">Email</dt>
          <dd className="text-neutral-600">{formData.email}</dd>
        </div>
        {formData.phone && (
          <div>
            <dt className="font-medium text-neutral-700">Phone</dt>
            <dd className="text-neutral-600">{formData.phone}</dd>
          </div>
        )}
        <div>
          <dt className="font-medium text-neutral-700">Service</dt>
          <dd className="text-neutral-600">{selectedService?.name}</dd>
        </div>
        <div>
          <dt className="font-medium text-neutral-700">Details</dt>
          <dd className="mt-1 space-y-1 text-neutral-600">
            {selectedService?.followUpQuestions.map((q) => (
              <p key={q.id}>
                <span className="text-neutral-500">{q.label}:</span>{" "}
                {formData.followUpAnswers[q.id]}
              </p>
            ))}
          </dd>
        </div>
        <div>
          <dt className="font-medium text-neutral-700">Project Description</dt>
          <dd className="text-neutral-600">{formData.problemDescription}</dd>
        </div>
      </dl>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <div className="flex justify-between pt-2">
        <button
          type="button"
          onClick={prevStep}
          disabled={isSubmitting}
          className="rounded-md border border-neutral-300 px-6 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 disabled:opacity-50"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="rounded-md bg-primary-600 px-6 py-2 text-sm font-medium text-white hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}
