import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react'
import { storage } from './Firebase';

export const Uploader = () => {
    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);

    function handleUpload() {
        if (!file) {
            alert("Please choose a file first!")
        }
        {
            const storageRef = ref(storage  , `/files/${file.name}`)
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const percent = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
     
                    // update progress
                    setPercent(percent);
                },
                (err) => console.log(err),
                () => {
                    // download url
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        console.log(url);
                    });
                },

            );
    
        }
       
    }
  function handleChange(event)
  {
    setFile(event.target.files[0]);
  }

  return (
    <div style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
        <label className='input'>
            <input type="file" onChange={handleChange} accept='application/pdf' style={{display: 'none'}}/>
            <span>Select File</span>
        </label>
        <button onClick={handleUpload} style={{cursor : "pointer"}}>Upload to Firebase</button>
        <p><h3>{percent} % DONE</h3></p>
    </div>
  )
}