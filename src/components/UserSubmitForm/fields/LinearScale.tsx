import useSubmitFormStore from "@/store/useSubmitFormStore";
import React from "react";

const LinearScale = ({
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
  const { form, handleStringsInputChange } = useSubmitFormStore();
  return (
    <>
      <div className="flex justify-between text-sm text-gray-600">
        <span>{question.options[0]}</span>
        <span>{question.options[1]}</span>
      </div>
      <input
        type="range"
        onChange={(e) => handleStringsInputChange(e, index)}
        min={question.options[0]}
        defaultValue={question.options[0]}
        max={question.options[1]}
        className="w-full accent-blue-600"
      />
      {form[index]?.error && (
        <p className="text-red-500 text-sm">This field is required</p>
      )}
    </>
  );
};

export default LinearScale;
