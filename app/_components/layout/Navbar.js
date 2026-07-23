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

  function close() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-neutral-900" onClick={close}>
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
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-neutral-700 transition hover:bg-neutral-100 sm:hidden"
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          </svg>
        </button>
      </nav>

      {/* Backdrop */}
      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-neutral-900/40 transition-opacity duration-300 sm:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Slide-in drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-y-0 right-0 z-50 w-72 max-w-[80%] transform border-l border-white/40 bg-white/80 shadow-xl backdrop-blur-lg transition-transform duration-300 ease-in-out sm:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-4">
          <span className="text-lg font-semibold text-neutral-900">Menu</span>
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-neutral-700 transition hover:bg-neutral-100"
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-4 p-4 text-sm font-medium text-neutral-700">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="py-1 hover:text-primary-600" onClick={close}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/intake"
            className="rounded-md bg-primary-600 px-4 py-2 text-center text-white hover:bg-primary-700"
            onClick={close}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
