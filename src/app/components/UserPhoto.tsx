"use client";
import React from "react";
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from "../config/firebase";
 
const UserPhoto = () => {
  const [user, loading, error] = useAuthState(auth)
  
  return (
    <div>
      {user !== null && loading === false && (
        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full"
            src={user?.photoURL}
            alt="user photo"
          />
          <p className="hidden sm:inline-flex">{user?.displayName}</p>
        </div>)}
      
    </div>
  );
};

export default UserPhoto;
