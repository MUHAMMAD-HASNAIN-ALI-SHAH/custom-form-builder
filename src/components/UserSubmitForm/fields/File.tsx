import useSubmitFormStore from "@/store/useSubmitFormStore";
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
  const { form, handleImageChange } = useSubmitFormStore();
  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleImageChange(e, index)}
        className={getInputClasses(index)}
      />
      {form[index]?.error && (
        <p className="text-red-500 text-sm">This field is required</p>
      )}
    </>
  );
};

export default File;
