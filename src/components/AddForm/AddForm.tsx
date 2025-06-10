"use client";
import { useState } from "react";
import Questions from "./Questions";

export default function AddForm() {
  const [questions, setQuestions] = useState(1);

  return (
    <div className="w-full 2xl:w-[1200px] mx-auto px-4 py-8 mt-15">
      {/* title */}

      <div className="mt-5">
        <div className="flex flex-col items-center gap-5 justify-between mb-4 border-l-8 border-blue-600 border-t-8 border-b-2  px-4 py-9 rounded-lg">
          <input
            type="text"
            placeholder="Untitled Form"
            className="w-full py-3 px-3 border-b-2 border-black focus:outline-none focus:border-b-2 focus:border-black text-3xl font-bold text-black"
          />
          <input
            type="text"
            placeholder="Add a description"
            className="w-full py-3 px-3 border-b-2 border-black focus:outline-none focus:border-b-2 focus:border-black text-xl"
          />
        </div>

        {/* Form Fields */}

        {questions > 0 &&
          Array.from({ length: questions }).map((_, index) => (
            <div
              key={index}
              className="mb-4 rounded-lg border-2 border-gray-300 bg-white p-6 shadow-sm"
            >
              <div className="grid gap-4">
                <Questions />

                <div></div>
              </div>
            </div>
          ))}

        {/* Add Question Button */}
        <div className="flex justify-center mb-4">
          <button
            type="button"
            onClick={() => setQuestions(questions + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add Question
          </button>
        </div>
      </div>
    </div>
  );
}
