"use client";
import useSubmitFormStore from "@/store/useSubmitFormStore";
import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import Form from "./Form";

const UserSubmitForm = ({ formId }: { formId: string }) => {
  const {
    getTheForm,
    form,
    loader,
    title,
    description,
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
              <div className="w-full mb-5 flex flex-col gap-1 justify-between border-t-[12px] border-blue-800  px-5 py-2 rounded-lg bg-white">
                <h1 className="text-2xl font-bold mb-4">{title}</h1>
                <p className="text-gray-600 mb-6">{description}</p>
              </div>
              <Form />
            </>
          )}
        </>
      )}
    </>
  );
};

export default UserSubmitForm;
