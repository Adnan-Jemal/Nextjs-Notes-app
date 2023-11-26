"use client";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { HiOutlineUserCircle } from "react-icons/hi2";

const UserPhoto = () => {
  const [user, loading, error] = useAuthState(auth);
  const userPhoto: string|undefined = user?.photoURL??undefined

  return (
    <div>
      {user !== null && loading === false && (
        <div className="flex items-center space-x-2">
          {user === (undefined||null) ? (
            <HiOutlineUserCircle className="text-5xl" />
          ) : (
            <img src={userPhoto} alt="" className="h-10 rounded-full" />
          )}

          <div className="">
            <p className="hidden sm:inline-flex">{user?.displayName}</p>
            <p className="text-sm hidden sm:flex">{user?.email}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPhoto;
