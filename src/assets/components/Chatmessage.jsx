import React from 'react'
import { auth } from './Firebase';

export const Chatmessage = (props) => {
    const {text , uid } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' :'received' ;
  return (

    <div className={`message ${messageClass}`}>
        <p>{text}</p>
    </div>
  )
}
