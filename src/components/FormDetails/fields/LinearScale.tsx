import React from "react";

const LinearScale = ({
  question,
  index,
}: {
  question: {
    index: number;
    questionType: string;
    questionText: string;
    required: boolean;
    options: string[];
  };
  index: number;
}) => {
  return (
    <>
      <div className="flex items-center justify-between mt-2 mb-4">
        {Array.from(
          {
            length:
              Number(question.options[1]) - Number(question.options[0]) + 1,
          },
          (_, i) => {
            const value = Number(question.options[0]) + i;
            return (
              <label
                key={value}
                className="flex flex-col items-center gap-2 cursor-pointer"
              >
                <input
                disabled
                  type="radio"
                  name={`question-${question.index}`}
                  value={value}
                  className={`form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500`}
                />
                <span className="text-gray-700">{value}</span>
              </label>
            );
          }
        )}
      </div>
    </>
  );
};

export default LinearScale;
