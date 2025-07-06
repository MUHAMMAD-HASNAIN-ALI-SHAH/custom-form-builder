"use client";
import { useState } from "react";
import Questions from "./Questions";
import FormHeader from "./FormHeader";

export default function AddForm() {
  const [questions, setQuestions] = useState([{ index: 1 }]);

  const onDeleteQuestion = (index: number) => {
    setQuestions((prev) => prev.filter((q) => q.index !== index));
  };

  return (
    <div className="w-full 2xl:w-[1200px] mx-auto px-4 py-8 mt-15">
      {/* title */}

      <div className="mt-5">

        <FormHeader index={questions.length} />

        {/* Form Fields */}

        {questions.length > 0 &&
          questions.map((question) => (
            <div
              key={question.index}
              className="mb-4 rounded-lg border-l-8 border-blue-600 bg-white p-6 shadow-sm"
            >
              <div className="grid gap-4">
                <Questions
                  index={question.index}
                  onDeleteQuestion={onDeleteQuestion}
                />

                <div></div>
              </div>
            </div>
          ))}

        {/* Add Question Button */}
        <div className="flex justify-center mb-4">
          <button
            type="button"
            onClick={() =>
              setQuestions([...questions, { index: questions.length + 1 }])
            }
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add Question
          </button>
        </div>
      </div>
    </div>
  );
}
