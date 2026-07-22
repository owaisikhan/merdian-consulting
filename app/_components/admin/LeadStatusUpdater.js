"use client";

import { useState, useTransition } from "react";
import { updateLeadStatus } from "@/app/_lib/actions";

const STATUS_OPTIONS = ["New", "Meeting Scheduled", "Archived"];

export default function LeadStatusUpdater({ leadId, currentStatus }) {
  const [status, setStatus] = useState(currentStatus);
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    const newStatus = e.target.value;
    setStatus(newStatus);

    startTransition(async () => {
      const result = await updateLeadStatus(leadId, newStatus);
      if (!result.success) {
        setStatus(currentStatus);
      }
    });
  }

  return (
    <select
      value={status}
      onChange={handleChange}
      disabled={isPending}
      className="rounded-md border border-neutral-300 px-2 py-2 text-xs text-neutral-700 disabled:opacity-50"
    >
      {STATUS_OPTIONS.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
