import useSubmitFormStore from "@/store/useSubmitFormStore";
import React from "react";

const CheckBox = ({
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
  const { form, handleCheckBoxChange } = useSubmitFormStore();
  return (
    <>
      <div className="flex flex-col gap-2">
        {question.options?.map((option, optionIndex) => (
          <label key={optionIndex} className="flex items-center gap-2">
            <input
              type="checkbox"
              onChange={(e) => handleCheckBoxChange(e, index)}
              value={option}
              className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            {option}
          </label>
        ))}
      </div>
      {form[index]?.error && (
        <p className="text-red-500 text-sm">This field is required</p>
      )}
    </>
  );
};

export default CheckBox;
