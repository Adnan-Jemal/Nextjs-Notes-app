import React from "react";

type props = {
  setEdit : React.Dispatch<React.SetStateAction<boolean>>,
  edit:Boolean
  
}

const EditNoteBtn = ({setEdit,edit}:props) => {
  const handelClick = ()=>{
    setEdit(!edit)
  }
  return (
    <>
      <button
        className={`${!edit?'bg-blue-500':'bg-green-500'} w-[30%] py-1 px-4 rounded-xl hover:opacity-80 text-white mb-2 transition-all duration-500`}
        onClick={handelClick}
      >
        {!edit?'Edit':'Save'}
      </button>
    </>
  );
};

export default EditNoteBtn;
