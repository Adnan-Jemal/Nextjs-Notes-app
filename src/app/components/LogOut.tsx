'use client'
import { signOut } from 'firebase/auth/cordova'
import React from 'react'
import { BiLogOutCircle } from 'react-icons/bi'
import { auth } from '../firebase/firebase'

const LogOut = () => {
    const Logout =()=> signOut(auth)
  return (
    <div className="flex text-center justify-center items-center group cursor-pointer" onClick={Logout}>
    <BiLogOutCircle className="text-4xl cursor-pointer hover:text-red-500 transition-colors group-hover:text-red-500" />
    <p className=" hidden sm:inline-flex ml-1 text-center group-hover:text-red-500 transition-colors">Logout</p>
  </div>
  )
}

export default LogOut