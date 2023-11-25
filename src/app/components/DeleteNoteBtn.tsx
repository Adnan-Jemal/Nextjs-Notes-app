import React from "react";

const DeleteNoteBtn = () => {
  return (
    <>
      <button
        className={`bg-red-500 w-[30%] py-1 px-4 rounded-xl hover:opacity-80 text-white mb-2 transition-all duration-500`}
      >
        Delete
      </button>
    </>
  );
};

export default DeleteNoteBtn;
