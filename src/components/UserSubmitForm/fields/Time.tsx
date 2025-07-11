import useSubmitFormStore from "@/store/useSubmitFormStore";
import React from "react";

const Time = ({
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
      <input
        type={question.questionType}
        onChange={(e) => handleStringsInputChange(e, index)}
        placeholder="Your answer"
        className={getInputClasses(index)}
      />
      {form[index]?.error && (
        <p className="text-red-500 text-sm">This field is required</p>
      )}
    </>
  );
};

export default Time;
