import React from "react";
import Forms from "./Forms";

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
      
        <Forms />
    </div>
  );
};

export default MyForms;
