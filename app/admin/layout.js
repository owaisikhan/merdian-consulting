import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createClient } from "@/app/_lib/supabase-server";
import AdminNavbar from "@/app/_components/admin/AdminNavbar";

export default async function AdminLayout({ children }) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname");

  if (pathname === "/admin/login") {
    return <div className="min-h-screen bg-neutral-50">{children}</div>;
  }

  const supabase = await createClient();

  const { data, error } = await supabase.auth.getClaims();
  const claims = data?.claims;

  // if (error || !claims || claims.email !== process.env.ADMIN_EMAIL) {
  //   // redirect("/admin/login?error=unauthorized");
  //   redirect("/admin/login");
  // }

  if (error || !claims) {
    redirect("/admin/login");
  }

  if (claims.email !== process.env.ADMIN_EMAIL) {
    await supabase.auth.signOut();
    redirect("/admin/login?error=not_admin");
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <AdminNavbar />
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}
