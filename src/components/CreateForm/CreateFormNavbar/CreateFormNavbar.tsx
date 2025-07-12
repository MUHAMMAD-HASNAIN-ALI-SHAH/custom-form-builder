import React from "react";
import PublishForm from "./PublishForm";

const CreateFormNavbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md">
      <nav className="max-w-7xl px-6 mx-auto py-5 flex items-center justify-between">
        <h1 className="text-xl font-semibold">📝 Create Form</h1>
        <div className="flex items-center space-x-4">
          <PublishForm />
        </div>
      </nav>
    </div>
  );
};

export default CreateFormNavbar;
