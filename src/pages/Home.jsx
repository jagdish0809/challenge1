import React from "react";
import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import Homecom from "../components/Homecom";
import Rightside from "../components/Rightside";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-[30px] pt-[40px] bg-[#F5F5F5]">
      <Header />
      <div className="max-w-[1200px] w-[96vw] flex space-x-[30px]">
        <Sidenav />
        <Homecom />
        <Rightside />
      </div>
    </div>
  );
};

export default Home;
