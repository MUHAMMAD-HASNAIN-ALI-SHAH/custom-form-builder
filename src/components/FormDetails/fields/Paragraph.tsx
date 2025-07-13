import React from "react";

const Paragraph = ({
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
      <textarea
      disabled
        rows={4}
        placeholder="Your answer"
        className={getInputClasses(index)}
      />
    </>
  );
};

export default Paragraph;
