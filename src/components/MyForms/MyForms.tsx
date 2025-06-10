import React from "react";

const formData = [
  { name: "Contact Form", responses: 23 },
  { name: "Survey Form", responses: 10 },
  { name: "Feedback Form", responses: 7 },
  { name: "Registration Form", responses: 34 },
  { name: "Order Form", responses: 15 },
  { name: "Newsletter Signup", responses: 5 },
];

const MyForms = () => {
  return (
    <div className="w-full px-6">
      <h1>My Recent Form</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {formData.map((form, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-md rounded-lg h-60"
          >
            {/* Top 60%: Icon */}
            <div className="h-[60%] flex items-center justify-center text-9xl">
              📝
            </div>

            {/* Bottom 40%: Name, Responses, and Menu */}
            <div className="h-[40%] flex flex-col justify-between p-4">
              <div>
                <div className="text-lg font-semibold">{form.name}</div>
                <div className="text-gray-500 text-sm">
                  {form.responses} responses
                </div>
              </div>
              <div className="flex justify-end text-2xl text-gray-900 cursor-pointer">
                ⋯
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyForms;
