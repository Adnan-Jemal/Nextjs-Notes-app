"use client";

import { useSignInWithGoogle, useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const router = useRouter();
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user, loading, error] = useAuthState(auth);
  const loggedIn = user != null && !loading;

  loggedIn && router.replace("/");
  const SignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center  bg-blue-300 dark:bg-gray-700 ">
        <h1 className=" mt-12 text-5xl ">NOTES</h1>

        <div className="h-80 w-80 bg-blue-300 dark:bg-gray-700 m-auto absolute top-0 bottom-0 left-0 right-0 rounded-3xl flex justify-center items-center gap-2">
          <h1 className="pb-3 text-2xl">Please SignIn To Continue</h1>
          <button
            className="p-5 bg-black dark:hover:bg-slate-300 hover:bg-slate-800 dark:bg-white dark:text-black text-white rounded-3xl font-bold hover:translate-y-1 transition-all duration-200 "
            onClick={SignIn}
          >
            SignIn With Google
          </button>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
