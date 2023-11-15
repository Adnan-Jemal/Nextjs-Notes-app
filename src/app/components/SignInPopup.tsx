'use client'

import { useAuth } from "../firebase/auth";
import { redirect, useRouter } from "next/navigation";


const SignInPopup = () => {
  const authUser = useAuth();
  const router = useRouter()
  const loggedIn = authUser.authUser === null && authUser.isLoading === false;
  loggedIn && redirect("/signin")


 
};

export default SignInPopup;
