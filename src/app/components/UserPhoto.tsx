"use client";
import React from "react";
import { useAuth } from "../firebase/auth";

const UserPhoto = () => {
  const user = useAuth();
  return (
    <div>
      {user.authUser !== null && user.isLoading === false && (
        <div className="flex items-center space-x-2">
          
          <img
            className="h-10 w-10 rounded-full"
            src={user.authUser.photo}
            alt="user photo"
          />
          <p>{user.authUser.name}</p>
        </div>
      )}{" "}
    </div>
  );
};

export default UserPhoto;
