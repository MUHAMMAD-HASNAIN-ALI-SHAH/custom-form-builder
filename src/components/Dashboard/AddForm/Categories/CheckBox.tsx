import { X } from "lucide-react";
import React, { useState } from "react";

interface CheckBoxProps {
  options: string[];
  setOptions: React.Dispatch<React.SetStateAction<string[]>>;
}

const CheckBox: React.FC<CheckBoxProps> = ({ options, setOptions }) => {
  const handleChange = (value: string, index: number) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (index: number) => {
    const updated = options.filter((_, idx) => idx !== index);
    setOptions(updated);
  };

  return (
    <div className="flex flex-col gap-2">
      {options.map((option, idx) => (
        <div key={idx} className="flex items-center gap-2 w-full">
          <input
            value={option}
            onChange={(e) => handleChange(e.target.value, idx)}
            placeholder={`Option ${idx + 1}`}
            className="border px-3 py-2 rounded-md"
          />
          <span onClick={() => removeOption(idx)} className="cursor-pointer">
            {" "}
            <X />{" "}
          </span>
        </div>
      ))}
      <button
        type="button"
        onClick={addOption}
        className="text-blue-600 text-sm hover:underline"
      >
        + Add Option
      </button>
    </div>
  );
};
export default CheckBox;
