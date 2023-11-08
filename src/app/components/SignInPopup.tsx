"use client";
import React from "react";
import { useAuth } from "../firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";

const SignInPopup = () => {
  const authUser = useAuth();
  const SignIn = async () => {
    const provider =  new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  return (
    <>
      {(authUser.authUser === null && authUser.isLoading===false) && (
        <div className=" absolute top-0 left-0 right-0 bottom-0 m-auto h-full bg-blue-300 dark:bg-gray-700 items-center">
          <div className="h-80 w-80 bg-blue-300 dark:bg-gray-700 m-auto absolute top-0 bottom-0 left-0 right-0 rounded-3xl flex justify-center items-center gap-2">
            <h1 className="pb-3 text-2xl" >Please SignIn To Continue</h1>
            <button
              className="p-5 bg-black dark:hover:bg-slate-300 hover:bg-slate-800 dark:bg-white dark:text-black text-white rounded-3xl font-bold hover:translate-y-1 transition-all duration-200 "
              onClick={SignIn}
            >
              SignIn With Google
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SignInPopup;
