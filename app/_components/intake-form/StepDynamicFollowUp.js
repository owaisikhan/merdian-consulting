"use client";

import { useIntakeForm } from "./IntakeFormContext";
import { SERVICES } from "@/app/_data/services";

export default function StepDynamicFollowUp() {
  const { formData, updateFollowUpAnswer, nextStep, prevStep } = useIntakeForm();

  const selectedService = SERVICES.find((s) => s.id === formData.serviceId);
  const questions = selectedService?.followUpQuestions ?? [];

  const allAnswered = questions.every(
    (q) => formData.followUpAnswers[q.id]?.trim?.() || formData.followUpAnswers[q.id]
  );

  function handleContinue() {
    if (allAnswered) {
      nextStep();
    }
  }

  if (!selectedService) {
    return (
      <div>
        <p className="text-neutral-600">
          Please go back and select a service first.
        </p>
        <button
          type="button"
          onClick={prevStep}
          className="mt-4 rounded-md border border-neutral-300 px-6 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-neutral-900">
        A few details about your {selectedService.name} project
      </h2>

      {questions.map((question) => (
        <div key={question.id}>
          <label
            htmlFor={question.id}
            className="mb-2 block text-sm font-medium text-neutral-700"
          >
            {question.label}
          </label>

          {question.type === "radio" && (
            <div role="radiogroup" aria-label={question.label} className="flex flex-wrap gap-2">
              {question.options.map((option) => {
                const isSelected = formData.followUpAnswers[question.id] === option;
                return (
                  <button
                    key={option}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => updateFollowUpAnswer(question.id, option)}
                    className={`rounded-md border px-4 py-2 text-sm transition ${
                      isSelected
                        ? "border-primary-600 bg-primary-50 text-primary-700"
                        : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          )}

          {question.type === "text" && (
            <input
              id={question.id}
              type="text"
              value={formData.followUpAnswers[question.id] || ""}
              onChange={(e) => updateFollowUpAnswer(question.id, e.target.value)}
              className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          )}
        </div>
      ))}

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
          disabled={!allAnswered}
          className="rounded-md bg-primary-600 px-6 py-2 text-sm font-medium text-white hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
