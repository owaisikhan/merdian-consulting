"use client";

import { useIntakeForm } from "./IntakeFormContext";

const MIN_LENGTH = 20;

export default function StepProblemDescription() {
  const { formData, updateField, nextStep, prevStep } = useIntakeForm();

  const isValid = formData.problemDescription.trim().length >= MIN_LENGTH;

  function handleContinue() {
    if (isValid) {
      nextStep();
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-neutral-900">
        Tell us about your project
      </h2>
      <p className="text-sm text-neutral-600">
        Describe the problem you&apos;re trying to solve or the project you have
        in mind. The more detail you give, the better we can prepare for our
        conversation.
      </p>

      <div>
        <label htmlFor="problemDescription" className="sr-only">
          Project description
        </label>
        <textarea
          id="problemDescription"
          rows={6}
          value={formData.problemDescription}
          onChange={(e) => updateField("problemDescription", e.target.value)}
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
        <p className="mt-1 text-xs text-neutral-500">
          {formData.problemDescription.trim().length < MIN_LENGTH
            ? `Please write at least ${MIN_LENGTH} characters.`
            : "Looks good."}
        </p>
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
          disabled={!isValid}
          className="rounded-md bg-primary-600 px-6 py-2 text-sm font-medium text-white hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
