
import React from "react";
import { IoMdAdd } from "react-icons/io";

type props={
  Onclick:()=>void,
  Opened:boolean
}

const AddBtn = ({Onclick,Opened}:props) => {

  return (
    <button
      onClick={Onclick}
      className="z-50 w-20 h-20 bg-white dark:bg-black hover:bg-slate-200 hover:dark:bg-slate-900 group  rounded-full flex justify-center items-center fixed bottom-14 right-12 transition-colors  duration-200 cursor-pointer"
    >
      <IoMdAdd className= {`text-5xl text-black group-hover:text-gray-600 dark:text-white group-hover:dark:text-blue-300  transition-colors ${Opened?'rotate-45 transition-transform duration-200':'rotate-90 transition-transform duration-200'}`}  />
    </button>
  );
};

export default AddBtn;
