"use client";
import React, { use } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import { auth, db } from "../config/firebase";
import { useRouter } from "next/navigation";
import Note from "./Note";
import { collection, orderBy, query, where } from "firebase/firestore";
type AllNotesType = {
  id: string;
  note: string;
};
const Notes = () => {
  const router = useRouter();
  const [user, userLoading, userError] = useAuthState(auth);
  const loggedIn = user === null && !userLoading;
  const notesQuery =
    user &&
    query(
      collection(db, "Notes"),
      where("uid", "==", user?.uid),
      orderBy("date", "desc")
    );
  const [values, loading, error] = useCollection(notesQuery);
  userError && console.error(userError);
  error && console.error(error);

  loggedIn && router.push("/signin");
  const allNotes: AllNotesType[] = [];
  values?.docs.map((note) =>
    allNotes.push({ id: note.id, note: note.data().note })
  );
  return (
    <div className="flex flex-wrap justify-center max-w-6xl my-20 gap-10 items-center m-auto">
      {allNotes.map((note) => (
        <Note key={note.id} NoteId={note.id} value={note.note} />
      ))}
      {(!loading && values?.docs.length == 0&&!userLoading) && (
        <h1 className="text-2xl  absolute m-auto top-[50%] text-center">
          You do not have any notes, Please click on add button (+) to add a note
        </h1>
      )}
    </div>
  );
};

export default Notes;
