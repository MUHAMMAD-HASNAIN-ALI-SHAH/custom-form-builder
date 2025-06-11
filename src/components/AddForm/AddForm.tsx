"use client";
import { useState } from "react";
import Questions from "./Questions";

export default function AddForm() {
  const [questions, setQuestions] = useState([{ index: 1 }]);

  const onDeleteQuestion = (index: number) => {
    setQuestions((prev) => prev.filter((q) => q.index !== index));
  };
  // const duplicateQuestion = (index: number) => {
  //   const questionIndex = questions.findIndex((q) => q.index === index);
  //   if (questionIndex === -1) return;

  //   const questionToDuplicate = questions[questionIndex];

  //   const updatedQuestions = [
  //     ...questions.slice(0, questionIndex + 1),
  //     { ...questionToDuplicate }, // duplicate inserted after original
  //     ...questions.slice(questionIndex + 1),
  //   ];

  //   // Reassign fresh index values
  //   const reindexedQuestions = updatedQuestions.map((q, i) => ({
  //     ...q,
  //     index: i + 1,
  //   }));

  //   setQuestions(reindexedQuestions);
  // };

  return (
    <div className="w-full 2xl:w-[1200px] mx-auto px-4 py-8 mt-15">
      {/* title */}

      <div className="mt-5">
        <div className="flex flex-col items-center gap-5 justify-between mb-4 border-b-8 border-blue-600 border-t-8 px-4 py-9 rounded-lg bg-white">
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
