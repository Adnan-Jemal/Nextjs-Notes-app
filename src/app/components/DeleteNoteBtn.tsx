import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../config/firebase";

const DeleteNoteBtn = ({ noteId }:{noteId:string}) => {
  const deleteNote = async () => {
    
    await deleteDoc(doc(db, "Notes", noteId));
  };
  return (
    <>
      <button
        className={`bg-red-500 w-[30%] py-1 px-4 rounded-xl hover:opacity-80 text-white mb-2 transition-all duration-500`}
        onClick={deleteNote}
      >
        Delete
      </button>
    </>
  );
};

export default DeleteNoteBtn;
