import Link from "next/link";
import { SITE_CONFIG } from "@/app/_lib/siteConfig";

export default function Navbar() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-neutral-900">
          {SITE_CONFIG.firmName}
        </Link>
        <div className="flex gap-6 text-sm font-medium text-neutral-700">
          <Link href="/#services" className="hover:text-primary-600">
            Services
          </Link>
          <Link href="/about" className="hover:text-primary-600">
            About
          </Link>
          <Link href="/contact" className="hover:text-primary-600">
            Contact
          </Link>
          <Link
            href="/intake"
            className="rounded-md bg-primary-600 px-4 py-2 text-white hover:bg-primary-700"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
