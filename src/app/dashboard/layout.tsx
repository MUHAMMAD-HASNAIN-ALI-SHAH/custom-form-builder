import DashboardNavbar from "@/components/Dashboard/DashboardNavbar/DashboardNavbar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) redirect("/");
  console.log(session.user)
  return (
    <div className="bg-gray-200 w-full">
      <main className="bg-gray-100">{children}</main>
    </div>
  );
}
