"use client";
import useFormDetails from "@/store/useFormDetails";
import React, { useEffect } from "react";

const UseFormDetailsGetter = ({ formId }: { formId: string }) => {
  const { getResponse, getForm, setFormDetailsLoader, setFormDetailsError } =
    useFormDetails();
  useEffect(() => {
    const fetchResponse = async () => {
      try {
        setFormDetailsLoader(true);
        setFormDetailsError(false);
        await getResponse(formId);
        await getForm(formId);
        setFormDetailsLoader(false);
      } catch (error) {
        console.error("Error fetching form details:", error);
        setFormDetailsError(true);
        setFormDetailsLoader(false);
      }
    };
    fetchResponse();
  }, []);
  return <div></div>;
};

export default UseFormDetailsGetter;
