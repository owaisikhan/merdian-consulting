import { Suspense } from "react";
import LoginForm from "@/app/_components/admin/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-sm rounded-lg border border-neutral-200 bg-white p-8 shadow-sm">
        <h1 className="mb-6 text-2xl font-semibold text-neutral-900">
          Admin Login
        </h1>
        <Suspense fallback={<div className="h-6" />}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
