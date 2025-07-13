import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CopyLink from "./CopyLink";
import { Link } from "lucide-react";
import useFormDetails from "@/store/useFormDetails";

const FormDetailsNavbar = ({
  formId,
  navigation,
  setNavigation,
}: {
  formId: string;
  navigation: string;
  setNavigation: (nav: string) => void;
}) => {
  const { getFormDetailsLoader, responses } = useFormDetails();
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md">
      <nav className="max-w-7xl px-6 mx-auto py-5 flex items-center justify-between">
        <h1 className="text-xl font-semibold">📝 </h1>
        <div className="flex items-center space-x-4">
          <Popover>
            <PopoverTrigger>
              <Link size={20} className="cursor-pointer" />
            </PopoverTrigger>
            <CopyLink formId={formId} />
          </Popover>
        </div>
      </nav>
      {!getFormDetailsLoader && (
        <nav className="max-w-xl px-6 mx-auto py-5 flex items-center justify-center gap-5">
          <h1
            onClick={() => setNavigation("questions")}
            className={`${
              navigation === "questions"
                ? "border-b-4 pb-1 border-red-600"
                : "pb-2"
            } cursor-pointer`}
          >
            Question
          </h1>
          <h1
            onClick={() => setNavigation("responses")}
            className={`${
              navigation === "responses"
                ? "border-b-4 pb-1 border-red-600"
                : "pb-2"
            } cursor-pointer`}
          >
            Responses {" "}
            <span className="px-[7px] py-[2px] rounded-full bg-red-500 text-white text-sm font-semibold">
              {responses.length}
            </span>
          </h1>
          <h1
            onClick={() => setNavigation("setting")}
            className={`${
              navigation === "setting"
                ? "border-b-4 pb-1 border-red-600"
                : "pb-2"
            } cursor-pointer`}
          >
            Setting
          </h1>
        </nav>
      )}
    </div>
  );
};

export default FormDetailsNavbar;
