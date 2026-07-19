"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/app/_lib/supabase-auth";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const notAdmin = searchParams.get("error") === "not_admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setIsSubmitting(false);

    if (error) {
      setError(error.message);
      return;
    }

    window.location.href = "/admin";
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {notAdmin && (
        <p
          className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-600"
          role="alert"
        >
          That account doesn&rsquo;t have admin access.
        </p>
      )}

      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="mb-1 block text-sm font-medium text-neutral-700"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Logging in..." : "Log In"}
      </button>
    </form>
  );
}
