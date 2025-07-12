"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function DashboardNavbar() {
  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <div className="bg-white w-full px-6 fixed top-0 left-0 z-50 shadow-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto py-4 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div
          onClick={() => redirect("/dashboard")}
          className="text-2xl md:text-3xl font-bold tracking-wide text-indigo-600 cursor-pointer"
        >
          <span className="text-gray-800">Form</span>
          <span className="italic underline decoration-indigo-600">
            Circuit
          </span>
        </div>

        {/* Right: Navigation Buttons */}
        <div className="flex items-center space-x-2">
          <Button
            onClick={handleSignOut}
            variant="destructive"
            className="cursor-pointer"
          >
            logout
          </Button>
        </div>
      </nav>
    </div>
  );
}
