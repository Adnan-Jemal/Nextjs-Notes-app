"use client";

import { useAuth } from "../firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const authUser = useAuth();
  const router = useRouter();

  const loggedIn = authUser.authUser != null && authUser.isLoading === false;
  loggedIn && router.replace("/");
  const SignIn = async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
  };

  return (
    <>
      <div className=" absolute top-0 left-0 right-0 bottom-0 m-auto overflow-hidden bg-blue-300 dark:bg-gray-700 items-center z-50">
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
