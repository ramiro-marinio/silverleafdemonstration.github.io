"use client"
import React, { useContext, useState } from 'react'
import { FirebaseContext} from '../components/context/app_wrapper'
import { app, auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword,signInWithPopup } from 'firebase/auth';
import Button from '../components/general/button/button';
export default function SignUp() {
  const context = useContext(FirebaseContext);
  const [errorMessage,setErrorMessage] = useState("");
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
        <div className='w-[500px] h-[400px] p-2 rounded-[20px] gap-3 border border-black dark:border-[rgba(255,255,255,0.1)]
        flex flex-col items-center'>
          <h1 className='text-2xl font-bold'>Sign Up</h1>
          <input type='text' placeholder='Email' className='input input-bordered w-full'></input>
          <input type='password' placeholder='Password' className='input input-bordered w-full'></input>
          <div className='flex flex-col flex-grow justify-center'>
            <Button onTap={()=>{
              try{
                createUserWithEmailAndPassword(
                  auth
                )
              }
              catch{

              }
            }} fill text='Sign In'/>
          </div>
        </div>
    </div>
  )
}
