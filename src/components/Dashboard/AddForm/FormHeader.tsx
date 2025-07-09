"use client";
import useCreateFormStore from "@/store/useCreateFormStore";
import React from "react";

const FormHeader = () => {
  const { formHeader, setFormHeader } = useCreateFormStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormHeader(name, value);
  };

  return (
    <form
      className="mb-20 flex flex-col items-center gap-5 justify-between border-b-8 border-blue-600 border-t-8 px-4 py-9 rounded-lg bg-white"
    >
      <input
        name="title"
        type="text"
        placeholder="Untitled Form"
        value={formHeader.title}
        onChange={handleChange}
        className="w-full py-3 px-3 border-b-2 border-black focus:outline-none focus:border-b-2 focus:border-black text-3xl font-bold text-black"
      />
      <input
        name="description"
        type="text"
        placeholder="Add a description"
        value={formHeader.description}
        onChange={handleChange}
        className="w-full py-3 px-3 border-b-2 border-black focus:outline-none focus:border-b-2 focus:border-black text-xl"
      />
    </form>
  );
};

export default FormHeader;
