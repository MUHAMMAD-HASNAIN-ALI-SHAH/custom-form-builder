"use client";
import useCreateFormStore from "@/store/useCreateFormStore";
import React from "react";

const AddQuestion = () => {
  const {addQuestion} = useCreateFormStore();
  return (
    <div className="flex justify-center mb-4">
      <button
        type="button"
        onClick={addQuestion}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Add Question
      </button>
    </div>
  );
};

export default AddQuestion;
