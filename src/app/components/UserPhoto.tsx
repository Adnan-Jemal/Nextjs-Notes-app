"use client";
import React from "react";
import { useAuth } from "../firebase/auth";

const UserPhoto = () => {
  const { authUser, isLoading } = useAuth();
  return (
    <div>
      {authUser !== null && isLoading === false && (
        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full"
            src={authUser?.photo}
            alt="user photo"
          />
          <p className="hidden sm:inline-flex">{authUser?.name}</p>
        </div>
      )}
    </div>
  );
};

export default UserPhoto;
