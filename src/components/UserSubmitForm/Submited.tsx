import useSubmitFormStore from "@/store/useSubmitFormStore";
import React from "react";

const Submited = () => {
  const { title, anotherSubmit } = useSubmitFormStore();
  return (
    <>
      <div className="w-full mb-5 flex flex-col gap-3 justify-start items-start border-t-[12px] border-blue-800  px-5 py-2 rounded-lg bg-white">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h1>Your response has been successfully Submited</h1>
        <button
          onClick={anotherSubmit}
          className="underline text-blue-700 cursor-pointer"
        >
          Submit another response
        </button>
      </div>
    </>
  );
};

export default Submited;
