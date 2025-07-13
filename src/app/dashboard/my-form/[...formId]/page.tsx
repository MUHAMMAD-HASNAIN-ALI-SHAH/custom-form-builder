"use client";
import UseFormDetailsGetter from "@/components/FormDetails/Getter/UseFormDetailsGetter";
import FormDetailsNavbar from "@/components/FormDetails/Navbar/FormDetailsNavbar";
import useFormDetails from "@/store/useFormDetails";
import { use, useState } from "react";
import Questions from "@/components/FormDetails/Questions";

interface PageProps {
  params: Promise<{ formId: string }>;
}

const Page = ({ params }: PageProps) => {
  const { formId } = use(params);
  const { getFormDetailsLoader, getFormDetailsError } = useFormDetails();
  const [navigation, setNavigation] = useState("questions");
  return (
    <div className="bg-gray-200 w-full">
      <FormDetailsNavbar
        formId={formId as string}
        setNavigation={setNavigation}
        navigation={navigation}
      />
      <UseFormDetailsGetter formId={formId as string} />
      {getFormDetailsLoader ? (
        <div className="flex items-center justify-center h-screen">
          <p className="text-xl">Loading...</p>
        </div>
      ) : getFormDetailsError ? (
        <div className="flex items-center justify-center h-screen">
          <p className="text-red-500 text-xl">Error loading form details.</p>
        </div>
      ) : (
        navigation === "questions" && <Questions />
      )}
    </div>
  );
};

export default Page;
