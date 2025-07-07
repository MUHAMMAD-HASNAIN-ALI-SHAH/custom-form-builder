"use client";
import { Button } from "@/components/ui/button";

export default function Navbar({questions}: { questions: any[] }) {
  const handlePublish = () => {
    console.log(questions);
  }
  return (
    <nav className="w-full px-6 py-4 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div
          className="text-2xl md:text-3xl font-bold tracking-wide text-indigo-600 cursor-pointer"
        >
          <span className="text-gray-800">Form</span>
        </div>

        {/* Right: Navigation Buttons */}
        <div className="flex items-center space-x-2">
          <Button onClick={handlePublish} className="cursor-pointer bg-blue-600 hover:bg-blue-800">Publish</Button>
        </div>
      </div>
    </nav>
  );
}
