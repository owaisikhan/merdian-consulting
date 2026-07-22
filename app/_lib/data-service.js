import { createClient } from "@/app/_lib/supabase-server";
import { supabase } from "@/app/_lib/supabase";

export async function getLeads({ sortBy = "created_at", sortDir = "desc", statusFilter = "all" } = {}) {
  const supabaseServer = await createClient();

  let query = supabaseServer.from("leads").select("*");

  if (statusFilter !== "all") {
    query = query.eq("status", statusFilter);
  }

  query = query.order(sortBy, { ascending: sortDir === "asc" });

  const { data, error } = await query;

  if (error) {
    console.error("getLeads error:", error.message);
    throw new Error("Leads could not be loaded");
  }

  return data;
}

export async function getSiteSettings() {
  const { data, error } = await supabase
    .from("site_settings")
    .select("*")
    .eq("id", 1)
    .single();

  if (error) {
    console.error("getSiteSettings error:", error.message);
    return null;
  }

  return data;
}
