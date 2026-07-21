"use client";

import { createContext, useContext, useState, useEffect } from "react";

const STORAGE_KEY = "meridian_intake_form";

const IntakeFormContext = createContext();

const initialFormData = {
  step: 1,
  fullName: "",
  email: "",
  phone: "",
  serviceId: "",
  followUpAnswers: {},
  problemDescription: "",
  aiSummary: null,
  aiTags: null,
};

export function IntakeFormProvider({ children }) {
  const [formData, setFormData] = useState(initialFormData);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch {
        // Corrupted data, ignore and start fresh
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
  }, [formData, isLoaded]);

  function updateField(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function updateFollowUpAnswer(questionId, value) {
    setFormData((prev) => ({
      ...prev,
      followUpAnswers: { ...prev.followUpAnswers, [questionId]: value },
    }));
  }

  function setAiAnalysis(summary, tags) {
    setFormData((prev) => ({ ...prev, aiSummary: summary, aiTags: tags }));
  }

  function goToStep(step) {
    setFormData((prev) => ({ ...prev, step }));
  }

  function nextStep() {
    setFormData((prev) => ({ ...prev, step: prev.step + 1 }));
  }

  function prevStep() {
    setFormData((prev) => ({ ...prev, step: Math.max(1, prev.step - 1) }));
  }

  function resetForm() {
    localStorage.removeItem(STORAGE_KEY);
    setFormData(initialFormData);
  }

  return (
    <IntakeFormContext.Provider
      value={{
        formData,
        isLoaded,
        updateField,
        updateFollowUpAnswer,
        setAiAnalysis,
        goToStep,
        nextStep,
        prevStep,
        resetForm,
      }}
    >
      {children}
    </IntakeFormContext.Provider>
  );
}

export function useIntakeForm() {
  const context = useContext(IntakeFormContext);
  if (!context) {
    throw new Error("useIntakeForm must be used within IntakeFormProvider");
  }
  return context;
}
