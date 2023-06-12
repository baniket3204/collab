import React, { useEffect, useState } from 'react'
import { auth, firestore } from './Firebase';
import { addDoc, collection , doc, getDocs, limit, orderBy, query, serverTimestamp} from 'firebase/firestore';
import { Chatmessage } from './Chatmessage';



export const Comment = ({ fname }) => {
  
    const messagesRef = collection(firestore, fname)
    const q = query(messagesRef, orderBy('createdAt'), limit(100))
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const init = async () =>{
            let arr = [];
            const qs = await getDocs(q);
            qs.forEach((doc) =>{
                var d = doc.data();
                arr.push(d);
            })
            setMessages(arr);
        }
        init();
    }, [])
    const [formValue , setFormValue] = useState('')
    const sendMessage = async(e) =>{
        e.preventDefault();

        const {uid} = auth.currentUser;
        const docRef = collection(firestore,`${fname}`)
        await addDoc(docRef, {
            text:formValue,
            createdAt : serverTimestamp(),
            uid

        })
        setFormValue('');
    }

  return (
    <div className='comment'>
        <div>
            <h2>COMMENTS</h2>
            {messages && messages.map(msg => <Chatmessage key = {msg.id} message = {msg}/>)}
        </div>
        <form onSubmit = {sendMessage}>
            <div className='comment-box'>
            <input value={formValue} placeholder = "Comment" onChange={(e) => setFormValue(e.target.value)} className='input-query'/>
            <button type='submit'>Comment</button>
            </div>
        </form>
    </div>
  )
}
