"use client";
import { useState } from "react";
import Questions from "./Questions";
import FormHeader from "./FormHeader";
import Navbar from "./Navbar";

export default function AddForm() {
  const [questions, setQuestions] = useState<
    {
      index: number;
      questionType: string;
      questionText: string;
      options: string[];
    }[]
  >([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const onQuestionChange = (
    index: number,
    updatedQuestion: Partial<(typeof questions)[0]>
  ) => {
    setQuestions((prev) =>
      prev.map((q) => {
        if (q.index === index) {
          const isTypeChanged =
            updatedQuestion.questionType &&
            updatedQuestion.questionType !== q.questionType;

          if (isTypeChanged) {
            return { ...q, ...updatedQuestion, options: [] };
          }

          return { ...q, ...updatedQuestion };
        }
        return q;
      })
    );
  };

  const duplicateQuestion = (index: number) => {
    setQuestions((prev) => {
      const originalIndex = prev.findIndex((q) => q.index === index);
      if (originalIndex === -1) return prev;

      const questionToDuplicate = prev[originalIndex];

      const duplicated = {
        ...questionToDuplicate,
        index: -1,
      };

      const newQuestions = [
        ...prev.slice(0, originalIndex + 1),
        duplicated,
        ...prev.slice(originalIndex + 1),
      ];

      return newQuestions.map((q, i) => ({
        ...q,
        index: i,
      }));
    });
  };

  const onOptionsChange = (index: number, newOptions: string[]) => {
    setQuestions((prev) =>
      prev.map((q) => (q.index === index ? { ...q, options: newOptions } : q))
    );
  };

  const onDeleteQuestion = (index: number) => {
    setQuestions((prev) => prev.filter((q) => q.index !== index));
  };

  return (
    <div className="w-full 2xl:w-[1200px] mx-auto px-4 py-8 mt-10">
      <Navbar questions={questions} formData={formData} />

      <div className="mt-5">
        <FormHeader setFormData={setFormData} formData={formData} />

        {questions.length > 0 &&
          questions.map((question) => (
            <div
              key={question.index}
              className="mb-4 rounded-lg border-l-8 border-blue-600 bg-white p-6 shadow-sm"
            >
              <div className="grid gap-4">
                <Questions
                  question={question}
                  onDeleteQuestion={onDeleteQuestion}
                  onQuestionChange={onQuestionChange}
                  onOptionsChange={onOptionsChange}
                  duplicateQuestion={duplicateQuestion}
                />
                <div></div>
              </div>
            </div>
          ))}

        <div className="flex justify-center mb-4">
          <button
            type="button"
            onClick={() =>
              setQuestions((prev) => [
                ...prev,
                {
                  index: prev.length,
                  questionType: "text",
                  questionText: "",
                  options: [] as string[],
                },
              ])
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
