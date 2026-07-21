import { getLeads } from "@/app/_lib/data-service";
import LeadStatusUpdater from "@/app/_components/admin/LeadStatusUpdater";
import Link from "next/link";

const STATUS_FILTERS = ["all", "New", "Meeting Scheduled", "Archived"];

export default async function AdminDashboardPage({ searchParams }) {
  const params = await searchParams;
  const statusFilter = params?.status || "all";
  const sortDir = params?.sort === "asc" ? "asc" : "desc";

  const leads = await getLeads({ statusFilter, sortDir });

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-neutral-900">Leads</h1>

        <div className="flex gap-2">
          {STATUS_FILTERS.map((status) => (
            <Link
              key={status}
              href={`/admin?status=${status}`}
              className={`rounded-md px-3 py-1 text-xs font-medium ${
                statusFilter === status
                  ? "bg-primary-600 text-white"
                  : "border border-neutral-300 text-neutral-600 hover:bg-neutral-50"
              }`}
            >
              {status === "all" ? "All" : status}
            </Link>
          ))}
        </div>
      </div>

      {leads.length === 0 ? (
        <p className="text-neutral-600">No leads found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-neutral-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-neutral-200 bg-neutral-50">
              <tr>
                <th className="px-4 py-3 font-medium text-neutral-700">Name</th>
                <th className="px-4 py-3 font-medium text-neutral-700">
                  Email
                </th>
                <th className="px-4 py-3 font-medium text-neutral-700">
                  Service
                </th>
                <th className="px-4 py-3 font-medium text-neutral-700">
                  <a
                    href={`/admin?status=${statusFilter}&sort=${sortDir === "asc" ? "desc" : "asc"}`}
                  >
                    Submitted {sortDir === "asc" ? "↑" : "↓"}
                  </a>
                </th>
                <th className="px-4 py-3 font-medium text-neutral-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-neutral-100 last:border-0"
                >
                  <td className="px-4 py-3 text-neutral-900">
                    {lead.full_name}
                  </td>
                  <td className="px-4 py-3 text-neutral-600">{lead.email}</td>
                  <td className="px-4 py-3 text-neutral-600">
                    {lead.service_id}
                  </td>
                  <td className="px-4 py-3 text-neutral-600">
                    {new Date(lead.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <LeadStatusUpdater
                      leadId={lead.id}
                      currentStatus={lead.status}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
