"use client";
import useFormDetails from "@/store/useFormDetails";
import React from "react";
import Text from "./fields/Text";
import Email from "./fields/Email";
import Number from "./fields/Number";
import Time from "./fields/Time";
import Date from "./fields/Date";
import Paragraph from "./fields/Paragraph";
import MultipleChoice from "./fields/MultipleChoice";
import File from "./fields/File";
import DropDown from "./fields/DropDown";
import LinearScale from "./fields/LinearScale";
import CheckBox from "./fields/CheckBox";

const Questions = () => {
  const { formHeader, questions } = useFormDetails();
  const getInputClasses = (index: number) => {
    return `w-full sm:w-[50%] border-0 border-b-2 focus:border-blue-600 focus:outline-none py-2 px-1 text-gray-800 bg-transparent`;
  };
  return (
    <div className="w-full px-6">
      <div className="max-w-3xl mx-auto pt-40">
        <form className="mb-5 flex flex-col items-center gap-3 justify-between border-l-8 border-blue-600 border-t-8 px-4 py-6 rounded-lg bg-white">
          <input
            name="title"
            type="text"
            placeholder="Untitled Form"
            value={formHeader.title}
            disabled
            className="w-full py-3 px-3 border-b border-black focus:outline-none focus:border-b focus:border-black text-3xl font-bold text-black"
          />
          <input
            name="description"
            type="text"
            placeholder="Add a description"
            value={formHeader.description}
            disabled
            className="w-full py-3 px-3 border-b border-black focus:outline-none focus:border-b focus:border-black text-xl"
          />
        </form>

        <div className="w-full">
          {questions.map((question, index) => (
            <div
              key={index}
              className="w-full mb-5 flex flex-col gap-2 justify-between px-7 rounded-lg bg-white py-7 border border-gray-300"
            >
              <h1 className="font-semibold text-lg">{question.questionText}</h1>

              <>
                {question.questionType === "text" && (
                  <Text
                    question={question}
                    getInputClasses={getInputClasses}
                    index={index}
                  />
                )}
                {question.questionType === "email" && (
                  <Email
                    question={question}
                    getInputClasses={getInputClasses}
                    index={index}
                  />
                )}
                {question.questionType === "number" && (
                  <Number
                    question={question}
                    getInputClasses={getInputClasses}
                    index={index}
                  />
                )}
                {question.questionType === "date" && (
                  <Date
                    question={question}
                    getInputClasses={getInputClasses}
                    index={index}
                  />
                )}
                {question.questionType === "time" && (
                  <Time
                    question={question}
                    getInputClasses={getInputClasses}
                    index={index}
                  />
                )}

                {question.questionType === "paragraph" && (
                  <Paragraph
                    question={question}
                    getInputClasses={getInputClasses}
                    index={index}
                  />
                )}

                {question.questionType === "file-upload" && (
                  <File
                    question={question}
                    getInputClasses={getInputClasses}
                    index={index}
                  />
                )}

                {question.questionType === "multiple-choice" && (
                  <MultipleChoice
                    question={question}
                    getInputClasses={getInputClasses}
                    index={index}
                  />
                )}

                {question.questionType === "dropdown" && (
                  <DropDown
                    question={question}
                    getInputClasses={getInputClasses}
                    index={index}
                  />
                )}

                {question.questionType === "linear-scale" &&
                  question.options?.length === 2 && (
                    <LinearScale question={question} index={index} />
                  )}

                {question.questionType === "check-box" && (
                  <CheckBox
                    question={question}
                    getInputClasses={getInputClasses}
                    index={index}
                  />
                )}
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questions;
