"use client";

import { useState, useEffect, useRef } from "react";
import { useIntakeForm } from "./IntakeFormContext";
import { analyzeProblemDescription } from "@/app/_lib/aiActions";

const MIN_LENGTH = 20;
const DEBOUNCE_MS = 800;

export default function StepProblemDescription() {
  const { formData, updateField, setAiAnalysis, nextStep, prevStep } = useIntakeForm();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const debounceRef = useRef(null);

  const isValid = formData.problemDescription.trim().length >= MIN_LENGTH;

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    const text = formData.problemDescription.trim();
    if (text.length < MIN_LENGTH) return;

    debounceRef.current = setTimeout(async () => {
      setIsAnalyzing(true);
      const result = await analyzeProblemDescription(text);
      setIsAnalyzing(false);

      if (result.success) {
        setAiAnalysis(result.summary, result.tags);
      }
    }, DEBOUNCE_MS);

    return () => clearTimeout(debounceRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.problemDescription]);

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
        Describe the problem you're trying to solve or the project you have
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
            : isAnalyzing
            ? "Analyzing..."
            : "Looks good."}
        </p>
      </div>

      {formData.aiTags && (
        <div className="rounded-md bg-primary-50 p-3">
          <p className="text-xs font-medium text-primary-700">
            Detected topics
          </p>
          <div className="mt-1 flex flex-wrap gap-1">
            {formData.aiTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white px-2 py-1 text-xs text-primary-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

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
