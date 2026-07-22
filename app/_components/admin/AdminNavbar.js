import Link from "next/link";

export default function AdminNavbar() {
  return (
    <nav className="border-b border-neutral-200 bg-white px-4 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <span className="text-lg font-semibold text-neutral-900">
          Meridian Admin
        </span>
        <Link
          href="/admin/settings"
          className="text-sm font-medium text-neutral-600 hover:text-primary-600"
        >
          Settings
        </Link>
      </div>
    </nav>
  );
}
