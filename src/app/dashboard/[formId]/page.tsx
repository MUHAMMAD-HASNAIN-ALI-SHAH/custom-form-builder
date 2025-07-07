import AddForm from "@/components/Dashboard/AddForm/AddForm";
import React from "react";

interface PageProps {
  params: { formId?: string[] };
}

const Page = async ({ params }: PageProps) => {
 const { formId } = await params;
  return (
    <div className="mt-10 max-w-4xl mx-auto px-4">
      <AddForm />
    </div>
  );
};

export default Page;
