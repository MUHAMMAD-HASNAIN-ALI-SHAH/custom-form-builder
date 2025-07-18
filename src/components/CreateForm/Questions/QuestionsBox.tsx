"use client";
import useCreateFormStore from "@/store/useCreateFormStore";
import React from "react";
import QuestionType from "./QuestionType";
import { Copy, DeleteIcon } from "lucide-react";

const QuestionsBox = () => {
  const {
    questions,
    handleQuestionInputChange,
    handleQuestionCategoryChange,
    handleRequiredChange,
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center bg-white p-4 rounded-md shadow-sm">
                <input
                  type="text"
                  name="question"
                  value={question.questionText}
                  onChange={(e) => handleQuestionInputChange(question.index, e)}
                  placeholder="Untitled Question"
                  className="col-span-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <select
                  name="type"
                  value={question.questionType}
                  onChange={(e) =>
                    handleQuestionCategoryChange(question.index, e)
                  }
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="text">Short Answer</option>
                  <option value="email">Email</option>
                  <option value="number">Number</option>
                  <option value="paragraph">Paragraph</option>
                  <option value="multiple-choice">Multiple Choice</option>
                  <option value="dropdown">Dropdown</option>
                  <option value="check-box">Check Box</option>
                  <option value="linear-scale">Linear Scale</option>
                  <option value="date">Date</option>
                  <option value="time">Time</option>
                  <option value="file-upload">File Upload</option>
                </select>

                <QuestionType
                  question={question}
                />

                <div className="md:col-span-3 flex justify-end items-center gap-4 mt-5">
                  <div className="flex gap-3">
                    <h1>Required</h1>
                    <button
                      onClick={() => handleRequiredChange(question.index)}
                      className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors duration-300 focus:outline-none ${
                        question.required ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                          question.required ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                  <Copy
                    className="cursor-pointer"
                    onClick={() => duplicateQuestion(question.index)}
                  />
                  <DeleteIcon
                    className="cursor-pointer"
                    onClick={() => onDeleteQuestion(question.index)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default QuestionsBox;
