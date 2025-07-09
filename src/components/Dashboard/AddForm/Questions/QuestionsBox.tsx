"use client";
import useCreateFormStore from "@/store/useCreateFormStore";
import React from "react";
import Questions from "./Questions";

const QuestionsBox = () => {
  const {
    questions,
    onQuestionChange,
    onOptionsChange,
    onDeleteQuestion,
    duplicateQuestion,
  } = useCreateFormStore();
  return (
    <>
      {questions.length > 0 &&
        questions.map((question) => (
          <div
            key={question.index}
            className="mb-4 rounded-lg border-l-8 border-blue-600 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-4">
              <Questions
                question={question}
              />
              <div></div>
            </div>
          </div>
        ))}
    </>
  );
};

export default QuestionsBox;
