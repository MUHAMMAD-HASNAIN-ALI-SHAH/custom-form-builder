"use client";
import React, { useEffect, useState } from "react";
import useFormStore from "@/store/useFormStore";
import FormLink from "./FormLink";

const Forms = () => {
  const { forms, getForms } = useFormStore();
  const [openLink, setOpenLink] = useState<string | null>(null);

  useEffect(() => {
    getForms();
  }, [getForms]);

  return (
    <>
      {openLink && (
        <FormLink
          link={`http://localhost:3000/form/${openLink}`}
          onClose={() => setOpenLink(null)}
        />
      )}

      {forms && forms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {forms.map((form, index) => (
            <div
              key={index}
              className="flex flex-col bg-white shadow-md rounded-lg h-72"
            >
              {/* Top 60%: Icon */}
              <div className="h-[50%] flex items-center justify-center text-9xl">
                📝
              </div>

              {/* Bottom 40%: Name, Responses, and Menu */}
              <div className="h-[50%] flex flex-col justify-between p-4">
                <div>
                  <div className="text-lg font-semibold">{form.title}</div>
                  <div className="text-gray-500 text-sm">0 responses</div>
                </div>
                <div className="flex justify-end py-3 mt-4">
                  <button
                    onClick={() => setOpenLink(form._id)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Share Link
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full mt-16 w-full text-center">
          <p className="text-gray-500">No forms available</p>
        </div>
      )}
    </>
  );
};

export default Forms;
