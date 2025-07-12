import React from "react";
import { Button } from "../ui/button";
import Fields from "./Fields";
import useSubmitFormStore from "@/store/useSubmitFormStore";

const Form = () => {
  const { form, onSubmit, onClear } = useSubmitFormStore();
  const getInputClasses = (index: number) => {
    return `w-full sm:w-[50%] border-0 border-b-2 ${
      form[index]?.error ? "border-red-500" : "border-gray-300"
    } focus:border-blue-600 focus:outline-none py-2 px-1 text-gray-800 bg-transparent`;
  };
  return (
    <form onSubmit={onSubmit} className="w-full">
      {form.map((question, index) => (
        <div
          key={index}
          className={`${
            question.error ? "border border-red-500" : ""
          } w-full mb-5 flex flex-col gap-2 justify-between px-7 rounded-lg bg-white py-7`}
        >
          <h1 className="font-semibold text-lg">{question.questionText}</h1>

          <Fields
            question={question}
            getInputClasses={getInputClasses}
            index={index}
          />
        </div>
      ))}

      <div className="w-full flex justify-between items-center px-7 py-4 rounded-lg">
        <Button
          type="submit"
          className="bg-blue-700 cursor-pointer hover:bg-blue-800"
        >
          Submit
        </Button>
        <Button
          onClick={onClear}
          type="reset"
          className="bg-white text-black border-2 border-gray-400 cursor-pointer hover:bg-white"
        >
          Clear Form
        </Button>
      </div>
    </form>
  );
};

export default Form;
