import Navbar from "@/components/Dashboard/Navbar/Navbar";
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
  return (
    <div className="min-h-screen flex">
      <Navbar />
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}
