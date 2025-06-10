import React from "react";
import StarterForm from "../StarterForm/StarterForm";
import MyForms from "../MyForms/MyForms";

const Home = () => {
  return (
    <div className="w-full 2xl:w-[1200px] mx-auto px-4 py-8 mt-10">
      <StarterForm />
      <MyForms />
    </div>
  );
};

export default Home;
