import React from 'react'
import { signInWithGoogle } from './Firebase.jsx'
import { BsGoogle } from 'react-icons/bs';

export const Login = () => {
  return (
    <div style={{display : "flex"  , justifyContent: "center"}}>
     <button onClick={signInWithGoogle}>Click here to login  <BsGoogle /></button>
    </div>
  )
}
