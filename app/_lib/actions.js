"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "@/app/_lib/supabase";
import { createClient } from "@/app/_lib/supabase-server";

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

export async function updateLeadStatus(leadId, newStatus) {
  const supabaseServer = await createClient();

  const { error } = await supabaseServer
    .from("leads")
    .update({ status: newStatus })
    .eq("id", leadId);

  if (error) {
    console.error("updateLeadStatus error:", error.message);
    return { success: false, error: "Could not update status." };
  }

  revalidatePath("/admin");
  return { success: true };
}

export async function updateSiteSettings(formData) {
  const { contactEmail, contactPhone, contactAddress } = formData;

  if (!contactEmail || !contactPhone || !contactAddress) {
    return { success: false, error: "All fields are required." };
  }

  const supabaseServer = await createClient();

  const { error } = await supabaseServer
    .from("site_settings")
    .update({
      contact_email: contactEmail,
      contact_phone: contactPhone,
      contact_address: contactAddress,
      updated_at: new Date().toISOString(),
    })
    .eq("id", 1);

  if (error) {
    console.error("updateSiteSettings error:", error.message);
    return { success: false, error: "Could not update settings." };
  }

  revalidatePath("/admin/settings");
  revalidatePath("/");
  revalidatePath("/about");
  revalidatePath("/contact");

  return { success: true };
}
