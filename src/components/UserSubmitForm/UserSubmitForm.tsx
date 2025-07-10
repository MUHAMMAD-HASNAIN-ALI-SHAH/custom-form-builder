"use client";
import useSubmitFormStore from "@/store/useSubmitFormStore";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

const UserSubmitForm = ({ formId }: { formId: string }) => {
  const {
    getTheForm,
    form,
    loader,
    title,
    description,
    handleStringsInputChange,
    handleCheckBoxChange,
    handleImageChange,
    onSubmit,
  } = useSubmitFormStore();

  useEffect(() => {
    const fetchForm = async () => {
      if (typeof formId === "string") {
        try {
          await getTheForm(formId);
        } catch (error) {
          console.error("Error fetching form:", error);
        }
      }
    };
    fetchForm();
  }, [formId, getTheForm]);

  const getInputClasses = (index: number) => {
    return `w-full md:w-[50%] border-0 border-b-2 ${
      form[index]?.error ? "border-red-500" : "border-gray-300"
    } focus:border-blue-600 focus:outline-none py-2 px-1 text-gray-800 bg-transparent`;
  };

  return (
    <>
      {form && (
        <>
          {loader ? (
            <div className="w-full h-[80vh] flex items-center justify-center">
              <Loader2 className="animate-spin text-blue-600" size={40} />
            </div>
          ) : (
            <>
              <div className="w-full mb-5 flex flex-col gap-1 justify-between border-blue-600 border-t-8 px-5 py-2 rounded-lg bg-white">
                <h1 className="text-2xl font-bold mb-4">{title}</h1>
                <p className="text-gray-600 mb-6">{description}</p>
              </div>

              <form onSubmit={onSubmit} className="w-full">
                {form.map((question, index) => (
                  <div
                    key={index}
                    className="w-full mb-5 flex flex-col gap-2 justify-between px-7 rounded-lg bg-white py-7"
                  >
                    <h1 className="font-semibold text-lg">
                      {question.questionText}
                    </h1>

                    {(question.questionType === "text" ||
                      question.questionType === "date" ||
                      question.questionType === "time" ||
                      question.questionType === "email" ||
                      question.questionType === "number") && (
                      <>
                        <input
                          type={question.questionType}
                          onChange={(e) => handleStringsInputChange(e, index)}
                          placeholder="Your answer"
                          className={getInputClasses(index)}
                        />
                        {form[index]?.error && (
                          <p className="text-red-500 text-sm">
                            This field is required
                          </p>
                        )}
                      </>
                    )}

                    {question.questionType === "paragraph" && (
                      <>
                        <textarea
                          onChange={(e) => handleStringsInputChange(e, index)}
                          rows={4}
                          placeholder="Your answer"
                          className={getInputClasses(index)}
                        />
                        {form[index]?.error && (
                          <p className="text-red-500 text-sm">
                            This field is required
                          </p>
                        )}
                      </>
                    )}

                    {question.questionType === "file-upload" && (
                      <>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageChange(e, index)}
                          className={getInputClasses(index)}
                        />
                        {form[index]?.error && (
                          <p className="text-red-500 text-sm">
                            This field is required
                          </p>
                        )}
                      </>
                    )}

                    {question.questionType === "multiple-choice" && (
                      <>
                        <div className="flex flex-col gap-2">
                          {question.options?.map((option, optionIndex) => (
                            <label
                              key={optionIndex}
                              className="flex items-center gap-2 cursor-pointer"
                            >
                              <input
                                type="radio"
                                name={`question-${question.index}`}
                                value={option}
                                onChange={(e) =>
                                  handleStringsInputChange(e, index)
                                }
                                className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                              />
                              <span className="text-gray-700">{option}</span>
                            </label>
                          ))}
                        </div>
                        {form[index]?.error && (
                          <p className="text-red-500 text-sm">
                            This field is required
                          </p>
                        )}
                      </>
                    )}

                    {question.questionType === "dropdown" && (
                      <>
                        <select
                          defaultValue=""
                          onChange={(e) => handleStringsInputChange(e, index)}
                          className={getInputClasses(index)}
                        >
                          <option value="" disabled>
                            -- Select an option --
                          </option>
                          {question.options?.map((option, optionIndex) => (
                            <option key={optionIndex} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {form[index]?.error && (
                          <p className="text-red-500 text-sm">
                            This field is required
                          </p>
                        )}
                      </>
                    )}

                    {question.questionType === "linear-scale" &&
                      question.options?.length === 2 && (
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
                            <p className="text-red-500 text-sm">
                              This field is required
                            </p>
                          )}
                        </>
                      )}

                    {question.questionType === "check-box" && (
                      <>
                        <div className="flex flex-col gap-2">
                          {question.options?.map((option, optionIndex) => (
                            <label
                              key={optionIndex}
                              className="flex items-center gap-2"
                            >
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
                          <p className="text-red-500 text-sm">
                            This field is required
                          </p>
                        )}
                      </>
                    )}
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
                    type="reset"
                    className="bg-white text-black border-2 border-gray-400 cursor-pointer hover:bg-white"
                  >
                    Clear Form
                  </Button>
                </div>
              </form>
            </>
          )}
        </>
      )}
    </>
  );
};

export default UserSubmitForm;
