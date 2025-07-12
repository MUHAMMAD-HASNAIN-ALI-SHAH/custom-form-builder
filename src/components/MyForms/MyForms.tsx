import React from "react";
import RecentsForms from "./RecentsForms";

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
    <div className="w-full">
      <h2 className="text-xl font-semibold">My Recent Form</h2>
      <RecentsForms />
    </div>
  );
};

export default MyForms;
