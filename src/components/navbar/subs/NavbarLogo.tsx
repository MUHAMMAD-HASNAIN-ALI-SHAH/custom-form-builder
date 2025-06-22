"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NavbarLogo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="text-3xl font-bold tracking-wide text-indigo-600 cursor-pointer"
    >
      <span className="text-gray-800">Form</span>
      <span className="italic underline decoration-indigo-600">Circuit</span>
    </div>
  );
};

export default NavbarLogo;
