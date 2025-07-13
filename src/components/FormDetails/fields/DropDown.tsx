import React from "react";

const DropDown = ({
  question,
  getInputClasses,
  index,
}: {
  question: {
    index: number;
    questionType: string;
    questionText: string;
    required: boolean;
    options: string[];
  };
  getInputClasses: (index: number) => string;
  index: number;
}) => {
  return (
    <>
      <select
        disabled
        className={getInputClasses(index)}
      >
        <option value="" disabled>
          -- Select an option --
        </option>
        {question.options?.map((option, optionIndex) => (
          <option key={optionIndex} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropDown;
