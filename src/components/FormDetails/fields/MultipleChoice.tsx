import React from "react";

const MultipleChoice = ({
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
      <div className="flex flex-col gap-2">
        {question.options?.map((option, optionIndex) => (
          <label
            key={optionIndex}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
            disabled
              type="radio"
              name={`question-${question.index}`}
              value={option}
              className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </>
  );
};

export default MultipleChoice;
