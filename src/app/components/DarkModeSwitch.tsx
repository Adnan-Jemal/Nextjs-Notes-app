"use client";
import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const DarkModeSwitch = () => {
  
  const { resolvedTheme , setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

 
  return (
    <>
      {mounted && (resolvedTheme === "dark" ? (
        <MdLightMode className="cursor-pointer" onClick={() => setTheme("light")} />
      ) : (
        <BsFillMoonFill className="cursor-pointer" onClick={() => setTheme("dark")} />)
      )}
    </>
  );
};

export default DarkModeSwitch;