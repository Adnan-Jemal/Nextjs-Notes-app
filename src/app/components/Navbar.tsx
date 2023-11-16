import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";
import LogOut from "./LogOut";
import UserPhoto from "./UserPhoto";

const Navbar = () => {
  return (
    <div className="flex justify-between text-xl pt-8 max-w-6xl items-center m-auto px-4">
      <LogOut/>
      <h1 className="text-4xl font-bold">My Notes</h1>
      <div className="flex justify-center items-center space-x-5">
        <DarkModeSwitch />
        <UserPhoto/>
      </div>
    </div>
  );
};

export default Navbar;
