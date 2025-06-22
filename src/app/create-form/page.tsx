"use client";
import AddForm from "@/components/AddForm/AddForm";
import { useSession } from "next-auth/react";
import React from "react";

const page = () => {
  const session = useSession();
  console.log("Session:", session);
  if (session.status === "loading") {
    return <div>Loading...</div>;
  }
  return <div className="w-full flex flex-col">{/* <AddForm /> */}</div>;
};

export default page;
