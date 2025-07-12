"use client";
import useCreateFormStore from "@/store/useCreateFormStore";
import React from "react";

const FormHeader = () => {
  const { handleFormHeaderChange } = useCreateFormStore();

  return (
    <form className="mb-15 flex flex-col items-center gap-3 justify-between border-l-8 border-blue-600 border-t-8 px-4 py-6 rounded-lg bg-white">
      <input
        name="title"
        type="text"
        placeholder="Untitled Form"
        onChange={handleFormHeaderChange}
        className="w-full py-3 px-3 border-b border-black focus:outline-none focus:border-b focus:border-black text-3xl font-bold text-black"
      />
      <input
        name="description"
        type="text"
        placeholder="Add a description"
        onChange={handleFormHeaderChange}
        className="w-full py-3 px-3 border-b border-black focus:outline-none focus:border-b focus:border-black text-xl"
      />
    </form>
  );
};

export default FormHeader;
