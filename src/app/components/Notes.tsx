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

  return (
    <div className="flex flex-wrap justify-center max-w-6xl my-20 gap-10 items-center m-auto">
      {values?.docs ? (
        values?.docs.map((note) => (
          <Note key={note.id} value={note.data().note} NoteId={note.id}  />
        ))
      ) : (
        <h1 className="text-2xl">...</h1>
      )}
    </div>
  );
};

export default Notes;
