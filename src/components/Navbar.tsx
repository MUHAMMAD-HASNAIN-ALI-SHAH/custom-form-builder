"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="w-full px-6 py-6 bg-white shadow-md flex items-center justify-between">
      {/* Logo */}
      <div
        onClick={() => router.push("/")}
        className="text-3xl font-bold tracking-wide text-indigo-600 cursor-pointer"
      >
        <span className="text-gray-800">Form</span>
        <span className="italic underline decoration-indigo-600">Circuit</span>
      </div>

      {/* Right Icon */}
      <div className="text-gray-600 hover:text-indigo-600 transition size-6">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
