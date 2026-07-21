import Link from "next/link";

const CAL_LINK = "https://cal.com/owais-khan-og1uvp/project-consultation";

export default function CalendarEmbed() {
  return (
    <div className="mt-6 text-center">
      <Link
        href={CAL_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-md bg-primary-600 px-6 py-3 text-sm font-medium text-white hover:bg-primary-700"
      >
        Book a Consultation
      </Link>

      <p className="mt-2 text-xs text-neutral-500">Opens in a new tab</p>
    </div>
  );
}
