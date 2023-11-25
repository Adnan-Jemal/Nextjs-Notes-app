"use client";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useRouter } from "next/navigation";
import Note from "./Note";

const Notes = () => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  const loggedIn = user === null && !loading;
  loggedIn && router.push("/signin");
  return (
    <div className="flex flex-wrap justify-center max-w-6xl my-20 gap-10 items-center m-auto">
        <Note value="hello"/>
    </div>
  );
};

export default Notes;
