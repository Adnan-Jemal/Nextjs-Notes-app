import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import DarkModeSwitch from "./DarkModeSwitch";

const Navbar = () => {
  return (
    <div className="flex justify-between text-xl mt-6 max-w-6xl items-center m-auto px-4">
      <div className="flex text-center justify-center items-center">
        <BiLogOutCircle className="text-4xl cursor-pointer hover:text-red-500 transition-colors " />
        <p className=" hidden sm:inline-flex ml-1 text-center">Logout</p>
      </div>

      <h1 className="text-4xl font-bold">My Notes</h1>
      <div className="flex justify-center items-center">
        <DarkModeSwitch  />
        <h4>Your Name</h4>
      </div>
    </div>
  );
};

export default Navbar;
