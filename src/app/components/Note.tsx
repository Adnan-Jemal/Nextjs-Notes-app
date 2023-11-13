"use client";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import DeleteNote from './DeleteNoteBtn'

const Note = () => {
  const [opened, setOpened] = useState(true);
  const [note, setNote] = useState("");
  return (
    <div className="bg-white h-64 w-[60%] sm:max-w-[300px] rounded-xl dark:bg-black relative text-center">
      <BsThreeDots
        className="text-3xl mr-4 ml-auto cursor-pointer "
        onClick={() => setOpened(!opened)}
      />
      {opened && <DeleteNote/>}

      <div className="h-64 rounded-xl overflow-hidden">
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter your note here"
          className="h-full w-full resize-none outline-none p-4 bg-gray-100 dark:bg-gray-800 "
        />
      </div>
    </div>
  );
};

export default Note;
