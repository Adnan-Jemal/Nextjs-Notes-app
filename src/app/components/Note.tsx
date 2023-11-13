"use client";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import DeleteNote from './DeleteNoteBtn'

const Note = () => {
  const [opened, setOpened] = useState(false);
  const [note, setNote] = useState("");
  return (
    <div className="bg-white h-64 w-[60%] sm:max-w-[300px] rounded-3xl dark:bg-black relative text-center mb-10">
      <BsThreeDots
        className={`text-3xl mr-4 ml-auto cursor-pointer dark:hover:text-blue-300 hover:text-gray-500 ${opened&&'dark:text-blue-300 text-gray-500'}`}
        onClick={() => setOpened(!opened)}
      />
      {opened && <DeleteNote/>}

      <div className="h-64 rounded-3xl overflow-hidden">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter your note here"
          className="h-full w-full resize-none outline-none p-4 bg-gray-100 dark:bg-gray-800  "
        />
      </div>
    </div>
  );
};

export default Note;
