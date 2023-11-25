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
import { collection, query, where } from "firebase/firestore";

const Notes = () => {
  const router = useRouter();
  const [user, userLoading, userError] = useAuthState(auth);
  const loggedIn = user === null && !userLoading;
  const notesQuery =
    user && query(collection(db, "Notes"), where("uid", "==", user?.uid));
  const [values, loading, error, snapshot] = useCollectionData(notesQuery);

  loggedIn && router.push("/signin");

  return (
    <div className="flex flex-wrap justify-center max-w-6xl my-20 gap-10 items-center m-auto">
      {values?.map((note) => (
        <Note key={note.id} value={note.note} />
      ))}
    </div>
  );
};

export default Notes;
