"use client";

import React from "react";
import PublishForm from "./PublishForm";

export default function AddFormNavbar() {
  return (
    <nav className="w-full px-6 py-4 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="text-2xl md:text-3xl font-bold tracking-wide text-indigo-600 cursor-pointer">
          <span className="text-gray-800">Form</span>
        </div>

        {/* Right: Navigation Buttons */}
        <PublishForm />
      </div>
    </nav>
  );
}
