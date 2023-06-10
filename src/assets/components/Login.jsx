import React from 'react'
import { signInWithGoogle } from './Firebase.jsx'

export const Login = () => {
  return (
    <div>
     <button onClick={signInWithGoogle}>Click here to login</button>
    </div>
  )
}
