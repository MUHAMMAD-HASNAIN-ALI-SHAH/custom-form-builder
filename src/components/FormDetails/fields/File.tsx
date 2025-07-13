import React from "react";

const File = ({
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
        type="file"
        accept="image/*"
        className={getInputClasses(index)}
      />
    </>
  );
};

export default File;
