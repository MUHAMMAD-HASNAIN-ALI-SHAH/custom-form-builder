import React, { useState } from "react";
import { Copy, DeleteIcon } from "lucide-react";
import QuestionType from "./QuestionType";

const Questions = ({
  question,
  onDeleteQuestion,
  onQuestionChange,
  onOptionsChange,
  duplicateQuestion,
}: {
  question: {
    index: number;
    questionType: string;
    questionText: string;
    options: string[];
  };
  onDeleteQuestion: (index: number) => void;
  onQuestionChange: (index: number, updated: Partial<typeof question>) => void;
  onOptionsChange: (index: number, newOptions: string[]) => void;
  duplicateQuestion: (index: number) => void;
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onQuestionChange(question.index, { questionText: e.target.value });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onQuestionChange(question.index, { questionType: e.target.value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center bg-white p-4 rounded-md shadow-sm">
      <input
        type="text"
        name="question"
        value={question.questionText}
        onChange={handleInputChange}
        placeholder="Untitled Question"
        className="col-span-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        name="type"
        value={question.questionType}
        onChange={handleCategoryChange}
        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="short">Short Answer</option>
        <option value="email">Email</option>
        <option value="number">Number</option>
        <option value="paragraph">Paragraph</option>
        <option value="multiple-choice">Multiple Choice</option>
        <option value="dropdown">Dropdown</option>
        <option value="radio">Radio</option>
        <option value="check-box">Check Box</option>
        <option value="linear-scale">Linear Scale</option>
        <option value="date">Date</option>
        <option value="time">Time</option>
        <option value="file-upload">File Upload</option>
      </select>

      <QuestionType question={question} onOptionsChange={onOptionsChange} />

      <div className="md:col-span-3 flex justify-end items-center gap-4">
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
  );
};

export default Questions;
