import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CopyLink from "./CopyLink";
import { Link } from "lucide-react";

const FormDetailsNavbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md">
      <nav className="max-w-7xl px-6 mx-auto py-5 flex items-center justify-between">
        <h1 className="text-xl font-semibold">📝 </h1>
        <div className="flex items-center space-x-4">
          <Popover>
            <PopoverTrigger>
              <Link size={20} className="cursor-pointer" />
            </PopoverTrigger>
            <CopyLink link="http://localhost:3000/form" />
          </Popover>
        </div>
      </nav>
      <nav className="max-w-xl px-6 mx-auto py-5 flex items-center justify-center gap-5">
        <h1 className="border-b-4 pb-1 border-red-600">Question</h1>
        <h1 className="pb-2">Responses</h1>
        <h1>Setting</h1>
      </nav>
    </div>
  );
};

export default FormDetailsNavbar;
