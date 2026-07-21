"use server";

import { supabase } from "@/app/_lib/supabase";

export async function submitLead(formData) {
  const {
    fullName,
    email,
    phone,
    serviceId,
    followUpAnswers,
    problemDescription,
    aiSummary,
    aiTags,
  } = formData;

  if (!fullName || !email || !serviceId || !problemDescription) {
    return { success: false, error: "Missing required fields." };
  }

  const { error } = await supabase.from("leads").insert({
    full_name: fullName,
    email,
    phone: phone || null,
    service_id: serviceId,
    follow_up_answers: followUpAnswers,
    problem_description: problemDescription,
    ai_summary: aiSummary || null,
    ai_tags: aiTags || null,
    status: "New",
  });

  if (error) {
    console.error("submitLead error:", error.message);
    return { success: false, error: "Something went wrong. Please try again." };
  }

  return { success: true };
}
