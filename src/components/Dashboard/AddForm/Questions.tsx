import React, { useState } from "react";
import ShortAnswer from "./Categories/ShortAnswer";
import Paragraph from "./Categories/Paragraph";
import MultipleChoice from "./Categories/MultipleChoice";
import LinearScale from "./Categories/LinearScale";
import DateInput from "./Categories/DateInput";
import TimeInput from "./Categories/TimeInput";
import Dropdown from "./Categories/Dropdown";
import { DeleteIcon } from "lucide-react";
import CheckboxOptions from "./Categories/CheckBox";

const Questions = ({
  index,
  onDeleteQuestion,
}: {
  index: number;
  onDeleteQuestion: (index: number) => void;
}) => {
  const [formData, setFormData] = useState({
    question: "",
    type: "",
  });
  const [optionsMultipleChoice, setOptionsMultipleChoice] = useState([""]);
  const [optionsDropDown, setOptionsDropDown] = useState([""]);
  const [optionsCheckBox, setOptionsCheckBox] = useState([""]);

  const cleanCategories = () => {
    setOptionsMultipleChoice([""]);
    setOptionsDropDown([""]);
  };

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCategoryChange = (e: any) => {
    cleanCategories();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const questionData = {
      ...formData,
      options:
        formData.type === "multiple-choice"
          ? optionsMultipleChoice
          : formData.type === "dropdown"
          ? optionsDropDown
          : formData.type === "check-box"
          ? optionsCheckBox
          : undefined,
    };
    console.log("Question Data:", questionData);
    console.log("Question Data Index :", index);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center bg-white p-4 rounded-md shadow-sm"
    >
      <input
        type="text"
        name="question"
        value={formData.question}
        onChange={handleInputChange}
        placeholder="Untitled Question"
        className="col-span-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <select
        name="type"
        value={formData.type}
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
      </select>

      {formData.type === "short" && <ShortAnswer />}
      {formData.type === "paragraph" && <Paragraph />}
      {formData.type === "multiple-choice" && (
        <MultipleChoice
          options={optionsMultipleChoice}
          setOptions={setOptionsMultipleChoice}
        />
      )}
      {formData.type === "dropdown" && (
        <Dropdown options={optionsDropDown} setOptions={setOptionsDropDown} />
      )}
      {formData.type === "check-box" && (
        <CheckboxOptions
          options={optionsCheckBox}
          setOptions={setOptionsCheckBox}
        />
      )}
      {formData.type === "linear-scale" && <LinearScale />}
      {formData.type === "date" && <DateInput />}
      {formData.type === "time" && <TimeInput />}

      <div className="md:col-span-3 flex justify-end items-center gap-4">
        <DeleteIcon
          className="cursor-pointer"
          onClick={() => onDeleteQuestion(index)}
        />
        <button
          type="submit"
          className="mt-3 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Save Question
        </button>
      </div>
    </form>
  );
};

export default Questions;
