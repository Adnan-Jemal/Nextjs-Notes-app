"use client";
import React, { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import DeleteNote from "./DeleteNoteBtn";
import EditNoteBtn from "./EditNoteBtn";
type props = {
  value: string;
};
const Note = ({ value }: props) => {
  const [opened, setOpened] = useState(false);
  const [note, setNote] = useState(value);
  const [editNote, setEditNote] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  useEffect(() => {
    (editNote&&textareaRef.current!=null)&& textareaRef.current.focus()
  }, [editNote])
  
  return (
    <div className="bg-white h-64 w-[60%] sm:max-w-[300px] rounded-3xl dark:bg-black relative text-center mb-10">
      <BsThreeDots
        className={`text-3xl mr-4 ml-auto cursor-pointer dark:hover:text-blue-300 hover:text-gray-500 ${
          opened && "dark:text-blue-300 text-gray-500"
        }`}
        onClick={() => setOpened(!opened)}
      />
      {opened && (
        <div className="flex gap-5 justify-center items-center">
          <DeleteNote /> <EditNoteBtn setEdit={setEditNote} edit={editNote} />
        </div>
      )}

      <div className="h-64 rounded-3xl overflow-hidden">
        <textarea
        ref={textareaRef}
          autoFocus={!editNote}
          value={note}
          readOnly={!editNote}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter your note here"
          className={`h-full w-full resize-none outline-none text-lg ${editNote&&'text-xl'}  p-4 bg-gray-100 dark:bg-gray-800`}
        />
      </div>
    </div>
  );
};

export default Note;
