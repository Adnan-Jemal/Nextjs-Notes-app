"use client";
import React from "react";
import AddBtn from "./AddBtn";
import { useState } from "react";
import{addDoc, collection, serverTimestamp} from 'firebase/firestore'
import { auth, db } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const AddNotePopup = () => {
  const [opened, setOpened] = useState(false);
  const [note, setNote] = useState("");
  const [user,loading] = useAuthState(auth)
  

  const HandelAdd = () => {
    setOpened(!opened);
  };
  const handelSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    note ? setOpened(false) : alert("Please Enter Your Note");
    if(note)
    {try {
      const newDoc = await addDoc(collection(db,'Notes'),{uid:user?.uid,note:note,date:serverTimestamp()})
    } catch (err) {
      console.error(err)
    }}
    
 

    setNote("");
    
  };
  return (
    <>
      <AddBtn Onclick={HandelAdd} Opened={opened} />
      {opened && (
        <div className=" z-20 min-h-screen   fixed bottom-0 top-0 left-0 right-0 backdrop-blur-lg  overflow-hidden flex flex-col justify-center items-center">
          <form
            onSubmit={handelSubmit}
            className=" w-[60%] h-[50%] flex flex-col justify-center items-center gap-5 "
          >
            <textarea
              onChange={(e) => setNote(e.target.value)}
              value={note}
              autoFocus
              placeholder="Enter your note here"
              className="text-lg h-full w-full resize-none outline-none border-2 rounded-2xl border-blue-300  p-5 bg-gray-100 dark:bg-gray-800 z-30 shadow-md  "
            />
            <button
              type="submit"
              className="bg-white dark:bg-blue-300 py-2 px-4 rounded-xl hover:opacity-80 w-[50%] text-blue-300 dark:text-black mb-2 transition-all duration-300 text-lg"
            >
              Add Note
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddNotePopup;
