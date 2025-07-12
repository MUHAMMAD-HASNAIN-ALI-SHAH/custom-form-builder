"use client";
import React, { useEffect, useState } from "react";
import useFormStore from "@/store/useFormStore";
import { Loader2 } from "lucide-react";

const RecentsForms = () => {
  const { forms, getForms, getFormLoader, getFormError } = useFormStore();

  useEffect(() => {
    getForms();
  }, [getForms]);

  return (
    <>
      {getFormLoader ? (
        <div className="flex justify-center items-center w-full h-full pt-10">
          <Loader2 className="animate-spin text-blue-700" size={40} />
        </div>
      ) : (
        <>
          {getFormError ? (
            <div className="text-red-500 text-center pt-10">
              <p>Error loading form</p>
            </div>
          ) : (
            <>
              {forms && forms.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-3">
                  {forms.map((form, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-center gap-8 bg-white shadow-2xl rounded-lg py-7"
                    >
                      {/* Top 60%: Icon */}
                      <div className="flex items-center justify-center text-7xl">
                        📝
                      </div>

                      {/* Bottom 40%: Name, Responses, and Menu */}
                      <div className="flex flex-col justify-between p-2">
                        <div>
                          <div className="text-lg font-semibold">
                            {form.title}
                          </div>
                          <div className="text-gray-500 text-sm">
                            0 responses
                          </div>
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
          )}
        </>
      )}
    </>
  );
};

export default RecentsForms;
