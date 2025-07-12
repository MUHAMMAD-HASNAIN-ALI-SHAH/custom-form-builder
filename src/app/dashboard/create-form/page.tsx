import AddFormWrapper from "@/components/CreateForm/AddFormWrapper";
import AddQuestion from "@/components/CreateForm/AddQuestion";
import CreateFormNavbar from "@/components/CreateForm/CreateFormNavbar/CreateFormNavbar";
import FormHeader from "@/components/CreateForm/FormHeader";
import QuestionsBox from "@/components/CreateForm/Questions/QuestionsBox";
import React from "react";

const Page = () => {
  return (
    <div className="bg-gray-200 w-full">
      <CreateFormNavbar />
      <div className="w-full max-w-3xl mx-auto px-6 py-8 pt-24">
        <AddFormWrapper />
        <FormHeader />
        <QuestionsBox />
        <AddQuestion />
      </div>
    </div>
  );
};

export default Page;
