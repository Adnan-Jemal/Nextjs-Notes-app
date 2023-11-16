"use client";
import React from "react";
import AddBtn from "./AddBtn";
import { useRouter } from "next/navigation";
import { useState } from "react";
type props = {
  Opened: Boolean;
};
const AddNotePopup = ({ Opened }: props) => {
  const [opened, setOpened] = useState(false);
  const route = useRouter();
  const HandelAdd = () => {
    setOpened(!opened);
    console.log(opened);
  };
  return (
    <>
      <AddBtn Onclick={HandelAdd} Opened={opened} />{" "}
      {opened && (
        <div className=" z-20 min-h-screen   fixed bottom-0 top-0 left-0 right-0 backdrop-blur-lg  overflow-hidden">
          AddNotePopup
        </div>
      )}
    </>
  );
};

export default AddNotePopup;
