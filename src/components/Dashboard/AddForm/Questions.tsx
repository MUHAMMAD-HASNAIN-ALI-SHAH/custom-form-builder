import React, { useState } from "react";
import MultipleChoice from "./Categories/MultipleChoice";
import LinearScale from "./Categories/LinearScale";
import Dropdown from "./Categories/Dropdown";
import { DeleteIcon } from "lucide-react";
import CheckboxOptions from "./Categories/CheckBox";

const Questions = ({
  question,
  onDeleteQuestion,
  onQuestionChange,
  onOptionsChange,
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
}) => {
  const [optionsCheckBox, setOptionsCheckBox] = useState([""]);

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
        <option value="paragraph">Paragraph</option>
        <option value="multiple-choice">Multiple Choice</option>
        <option value="dropdown">Dropdown</option>
        <option value="check-box">Check Box</option>
        <option value="linear-scale">Linear Scale</option>
        <option value="date">Date</option>
        <option value="time">Time</option>
        <option value="file-upload">File Upload</option>
      </select>

      {question.questionType === "multiple-choice" && (
        <MultipleChoice
          index={question.index}
          options={question.options}
          onOptionsChange={onOptionsChange}
        />
      )}
      {question.questionType === "dropdown" && (
        <Dropdown
          index={question.index}
          options={question.options}
          onOptionsChange={onOptionsChange}
        />
      )}
      {question.questionType === "check-box" && (
        <CheckboxOptions
          index={question.index}
          options={question.options}
          onOptionsChange={onOptionsChange}
        />
      )}
      {question.questionType === "linear-scale" && (
        <LinearScale
          index={question.index}
          options={question.options}
          onOptionsChange={onOptionsChange}
        />
      )}

      <div className="md:col-span-3 flex justify-end items-center gap-4">
        <DeleteIcon
          className="cursor-pointer"
          onClick={() => onDeleteQuestion(question.index)}
        />
      </div>
    </div>
  );
};

export default Questions;
