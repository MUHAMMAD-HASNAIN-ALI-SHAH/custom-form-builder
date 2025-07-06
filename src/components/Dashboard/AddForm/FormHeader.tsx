import React, { useState } from "react";

const FormHeader = ({ index }: { index: number }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Form ${index} Submitted`);
    console.log("Title:", formData.title);
    console.log("Description:", formData.description);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-20 flex flex-col items-center gap-5 justify-between border-b-8 border-blue-600 border-t-8 px-4 py-9 rounded-lg bg-white"
    >
      <input
        name="title"
        type="text"
        placeholder="Untitled Form"
        value={formData.title}
        onChange={handleChange}
        className="w-full py-3 px-3 border-b-2 border-black focus:outline-none focus:border-b-2 focus:border-black text-3xl font-bold text-black"
      />
      <input
        name="description"
        type="text"
        placeholder="Add a description"
        value={formData.description}
        onChange={handleChange}
        className="w-full py-3 px-3 border-b-2 border-black focus:outline-none focus:border-b-2 focus:border-black text-xl"
      />
      <button
        type="submit"
        className="self-end py-3 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Update Title
      </button>
    </form>
  );
};

export default FormHeader;
