"use client";
import { Button } from "@/components/ui/button";
import { PopoverContent } from "@/components/ui/popover";
import React from "react";

const CopyLink = ({ formId }: { formId: string }) => {
  const [onClick, setOnClick] = React.useState(false);
  return (
    <PopoverContent className="mr-3 flex flex-col gap-3 p-4">
      <h1 className="">Copy Responder Link</h1>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          className="border:outline-none border-b-2 border-red-500 focus:outline-none focus:border-b-2 focus:border-red-700"
          value={`${process.env.NEXT_PUBLIC_BASE_URL}/form/${formId}`}
          readOnly
        />
      </div>
      <div className="w-full flex justify-end mt-2">
        <Button
          onClick={() => {
            setOnClick(true);
            navigator.clipboard.writeText(
              `${process.env.NEXT_PUBLIC_BASE_URL}/form/${formId}`
            );
          }}
          className="bg-blue-500 text-white hover:bg-blue-600"
        >
          {onClick ? "Copied!" : "Copy Link"}
        </Button>
      </div>
    </PopoverContent>
  );
};

export default CopyLink;
