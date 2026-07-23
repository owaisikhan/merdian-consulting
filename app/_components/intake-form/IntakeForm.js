"use client";

import { useState } from "react";
import { useIntakeForm } from "./IntakeFormContext";
import StepContactInfo from "./StepContactInfo";
import StepServiceSelect from "./StepServiceSelect";
import StepDynamicFollowUp from "./StepDynamicFollowUp";
import StepProblemDescription from "./StepProblemDescription";
import StepReviewSubmit from "./StepReviewSubmit";
import CalendarEmbed from "./CalendarEmbed";
import ProgressSteps from "@/app/_components/ui/ProgressSteps";

const STEP_LABELS = [
  "Contact Info",
  "Service",
  "Details",
  "Description",
  "Review",
];

export default function IntakeForm() {
  const { formData, isLoaded } = useIntakeForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedSummary, setSubmittedSummary] = useState(null);

  if (!isLoaded) {
    return <p className="text-neutral-500">Loading...</p>;
  }

  if (isSubmitted) {
    return (
      <div className="rounded-lg border border-neutral-200 bg-white p-8 text-center">
        <h2 className="text-xl font-semibold text-neutral-900">
          Thanks for reaching out!
        </h2>
        <p className="mt-2 text-neutral-600">
          We've received your project details. Feel free to book a time to
          talk below, or we'll be in touch shortly.
        </p>
        {submittedSummary && (
          <div className="mt-4 rounded-md bg-primary-50 p-4 text-left text-sm">
            <p className="font-medium text-primary-700">
              Here&apos;s what we understood from your description:
            </p>
            <p className="mt-1 text-primary-800">{submittedSummary}</p>
          </div>
        )}
        <CalendarEmbed />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl">
      <ProgressSteps
        currentStep={formData.step}
        totalSteps={STEP_LABELS.length}
        labels={STEP_LABELS}
      />

      {formData.step === 1 && <StepContactInfo />}
      {formData.step === 2 && <StepServiceSelect />}
      {formData.step === 3 && <StepDynamicFollowUp />}
      {formData.step === 4 && <StepProblemDescription />}
      {formData.step === 5 && (
        <StepReviewSubmit
          onSubmitted={(aiSummary) => {
            setSubmittedSummary(aiSummary);
            setIsSubmitted(true);
          }}
        />
      )}
    </div>
  );
}
