"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const CreateFormButton = ({ session }: { session: any }) => {
  const router = useRouter();

  const createForm = async () => {
    router.push("/dashboard/create-form");
  };

  return (
    <div className="py-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Start a new form
      </h2>
      <div
        onClick={() => createForm()}
        className="max-w-36 h-36 border border-dashed border-gray-400 rounded-lg flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      >
        <Plus size={40} className="text-blue-600" />
      </div>
    </div>
  );
};

export default CreateFormButton;
