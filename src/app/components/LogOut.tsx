"use client";
import { signOut } from "firebase/auth/cordova";
import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { auth } from "../config/firebase";
import { useRouter } from "next/navigation";

const LogOut = () => {
  const route = useRouter();
  const Logout = () => {
    signOut(auth);
    route.push("/signin");
  };
  return (
    <div
      className="flex text-center justify-center items-center group cursor-pointer"
      onClick={Logout}
    >
      <BiLogOutCircle className="text-4xl cursor-pointer hover:text-red-500 transition-colors group-hover:text-red-500" />
      <p className=" hidden sm:inline-flex ml-1 text-center group-hover:text-red-500 transition-colors">
        Logout
      </p>
    </div>
  );
};

export default LogOut;
