import React from "react";

const Text = ({
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
      <input
        disabled
        type={question.questionType}
        placeholder="Your answer"
        className={getInputClasses(index)}
      />
    </>
  );
};

export default Text;
