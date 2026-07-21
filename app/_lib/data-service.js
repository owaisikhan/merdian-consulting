import { createClient } from "@/app/_lib/supabase-server";

export async function getLeads({ sortBy = "created_at", sortDir = "desc", statusFilter = "all" } = {}) {
  const supabase = await createClient();

  let query = supabase.from("leads").select("*");

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
