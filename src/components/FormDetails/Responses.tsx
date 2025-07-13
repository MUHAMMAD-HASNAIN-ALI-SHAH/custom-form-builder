import useFormDetails from "@/store/useFormDetails";
import React from "react";

const Responses = () => {
  const { responses } = useFormDetails();
  return (
    <div className="w-full px-6">
      <div className="max-w-3xl mx-auto pt-40">
        <div className="w-full bg-white">
          <header className="flex items-center justify-between p-4 border-b">
            <h1 className="text-2xl font-semibold">Responses</h1>
            <p className="text-gray-500">Total Responses {responses.length}</p>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Responses;
