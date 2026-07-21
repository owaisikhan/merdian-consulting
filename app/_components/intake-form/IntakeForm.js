"use client";

import { useState } from "react";
import { useIntakeForm } from "./IntakeFormContext";
import StepContactInfo from "./StepContactInfo";
import StepServiceSelect from "./StepServiceSelect";
import StepDynamicFollowUp from "./StepDynamicFollowUp";
import StepProblemDescription from "./StepProblemDescription";
import StepReviewSubmit from "./StepReviewSubmit";
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
          We&apos;ve received your project details and will be in touch shortly.
        </p>
        {/* Calendar embed will go here in the next stage */}
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
        <StepReviewSubmit onSubmitted={() => setIsSubmitted(true)} />
      )}
    </div>
  );
}
