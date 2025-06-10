"use client";

import { useState } from "react";

export default function AddForm() {
  const [questions, setQuestions] = useState(1);

  return (
    <div className="w-full 2xl:w-[1200px] mx-auto px-4 py-8 mt-15">
      {/* title */}

      <form action="" className="mt-5">
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
            <div key={index} className="flex flex-col items-center gap-5 justify-between mb-4 border-2 border-gray-400 bg-white  px-4 py-9 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">{index + 1}.</span>
              <input
                type="text"
                placeholder={`Question ${index + 1}`}
                className="w-full py-2 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              />
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
      </form>
    </div>
  );
}
