"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/app/_lib/siteConfig";

const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-neutral-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-lg font-semibold text-neutral-900"
          onClick={() => setIsOpen(false)}
        >
          {SITE_CONFIG.firmName}
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-neutral-700 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary-600">
              {link.label}
            </Link>
          ))}
          <Link
            href="/intake"
            className="rounded-md bg-primary-600 px-4 py-2 text-white hover:bg-primary-700"
          >
            Get Started
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-md text-neutral-700 hover:bg-neutral-100 sm:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-6 w-6"
            aria-hidden="true"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-neutral-200 px-4 py-4 sm:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-neutral-700">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1 hover:text-primary-600"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/intake"
              className="rounded-md bg-primary-600 px-4 py-2 text-center text-white hover:bg-primary-700"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
