import { createClient } from "@/app/_lib/supabase-server";
import { supabase } from "@/app/_lib/supabase";

const LEADS_PAGE_SIZE = 9;

export async function getLeads({
  sortBy = "created_at",
  sortDir = "desc",
  statusFilter = "all",
  search = "",
  page = 1,
} = {}) {
  const supabaseServer = await createClient();

  let query = supabaseServer.from("leads").select("*", { count: "exact" });

  if (statusFilter !== "all") {
    query = query.eq("status", statusFilter);
  }

  if (search) {
    query = query.or(`full_name.ilike.%${search}%,email.ilike.%${search}%`);
  }

  query = query.order(sortBy, { ascending: sortDir === "asc" });

  const from = (page - 1) * LEADS_PAGE_SIZE;
  const to = from + LEADS_PAGE_SIZE - 1;
  query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) {
    console.error("getLeads error:", error.message);
    throw new Error("Leads could not be loaded");
  }

  return {
    leads: data,
    totalCount: count ?? 0,
    pageSize: LEADS_PAGE_SIZE,
  };
}

export async function getLeadStatusCounts() {
  const supabaseServer = await createClient();

  const statuses = ["all", "New", "Meeting Scheduled", "Archived"];

  const counts = await Promise.all(
    statuses.map(async (status) => {
      let query = supabaseServer
        .from("leads")
        .select("*", { count: "exact", head: true });

      if (status !== "all") {
        query = query.eq("status", status);
      }

      const { count, error } = await query;

      if (error) {
        console.error("getLeadStatusCounts error:", error.message);
        return [status, 0];
      }

      return [status, count ?? 0];
    }),
  );

  return Object.fromEntries(counts);
}

export async function getLeadById(leadId) {
  const supabaseServer = await createClient();

  const { data, error } = await supabaseServer
    .from("leads")
    .select("*")
    .eq("id", leadId)
    .single();

  if (error) {
    console.error("getLeadById error:", error.message);
    return null;
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
