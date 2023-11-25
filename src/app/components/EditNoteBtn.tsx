import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { db } from "../config/firebase";

type props = {
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  edit: Boolean;
  noteId: string;
  note: string;
};

const EditNoteBtn = ({ setEdit, edit, noteId, note }: props) => {
  const handelClick = async () => {
    edit && (await updateDoc(doc(db, "Notes", noteId), { note: note }));
    setEdit(!edit);
  };
  return (
    <>
      <button
        className={`${
          !edit ? "bg-blue-500" : "bg-green-500"
        } w-[30%] py-1 px-4 rounded-xl hover:opacity-80 text-white mb-2 transition-all duration-500`}
        onClick={handelClick}
      >
        {!edit ? "Edit" : "Save"}
      </button>
    </>
  );
};

export default EditNoteBtn;
