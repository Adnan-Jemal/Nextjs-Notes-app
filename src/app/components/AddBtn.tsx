import React from "react";
import { IoMdAdd } from "react-icons/io";
import AddNotePopup from "./AddNotePopup";
const AddBtn = () => {
  const AddNotePopup = () => <AddNotePopup />;
  return (
    <button
      onClick={AddNotePopup()}
      className="w-20 h-20 bg-white dark:bg-black hover:bg-slate-200 hover:dark:bg-slate-800 group  rounded-full flex justify-center items-center fixed bottom-14 right-12 transition-colors  duration-200 cursor-pointer"
    >
      <IoMdAdd className=" text-5xl text-black group-hover:text-gray-600 dark:text-white group-hover:dark:text-blue-300  transition-colors " />
    </button>
  );
};

export default AddBtn;
