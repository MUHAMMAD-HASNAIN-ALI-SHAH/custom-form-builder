import React, { useState } from "react";
import ShortAnswer from "./Categories/ShortAnswer";
import Paragraph from "./Categories/Paragraph";

const Questions = () => {
  const [formData, setFormData] = useState({
    question: "",
    type: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center bg-white border border-gray-300 p-4 rounded-md shadow-sm"
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
        onChange={handleSelectChange}
        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="short">Short Answer</option>
        <option value="paragraph">Paragraph</option>
        <option value="multiple-choice">Multiple Choice</option>
        <option value="checkboxes">Checkboxes</option>
        <option value="dropdown">Dropdown</option>
        <option value="linear-scale">Linear Scale</option>
        <option value="date">Date</option>
        <option value="time">Time</option>
      </select>

      {formData.type === "short" && <ShortAnswer />}
      {formData.type === "paragraph" && <Paragraph />}

      <div className="md:col-span-3 flex justify-end">
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
