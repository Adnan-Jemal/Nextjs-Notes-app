import React from "react";
import { IoMdAdd } from "react-icons/io";
const AddBtn = () => {
  return (
    <div className="w-20 h-20 bg-white dark:bg-black hover:bg-slate-200 hover:dark:bg-slate-800 group  rounded-full flex justify-center items-center absolute bottom-14 right-12 transition-colors  duration-200 cursor-pointer">
      <IoMdAdd className=" text-5xl text-black group-hover:text-slate-800 dark:text-white group-hover:dark:text-blue-300 transition-colors " />
    </div>
  );
};

export default AddBtn;
