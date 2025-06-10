import React from "react";
import { Plus } from "lucide-react"; // Make sure lucide-react is installed

const StarterForm = () => {
  return (
    <div className="px-6 py-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Start a new form
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Box with + icon */}
        <div className="h-40 border border-dashed border-gray-400 rounded-lg flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <Plus size={50} className="text-gray-500" />
        </div>

        {/* You can add more boxes here in future */}
      </div>
    </div>
  );
};

export default StarterForm;
