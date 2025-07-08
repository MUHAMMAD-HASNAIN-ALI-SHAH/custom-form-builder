"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Navbar() {
  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <nav className="w-full px-6 py-4 bg-white shadow-sm fixed top-0 left-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div onClick={()=>redirect('/dashboard')}
          className="text-2xl md:text-3xl font-bold tracking-wide text-indigo-600 cursor-pointer"
        >
          <span className="text-gray-800">Form</span>
          <span className="italic underline decoration-indigo-600">Circuit</span>
        </div>

        {/* Right: Navigation Buttons */}
        <div className="flex items-center space-x-2">
          <Button onClick={handleSignOut} variant="destructive" className="cursor-pointer">logout</Button>
        </div>
      </div>
    </nav>
  );
}
