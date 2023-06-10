import React, { useEffect, useState } from 'react'
import { allItems } from './Firebase'
import { fetchData } from './helpers'
import { BsFiletypePdf } from 'react-icons/Bs';



export const Dashboard = () => {
const [files , setFiles] = useState([]);
useEffect(() => {
  let fl = fetchData('files')
  setFiles(fl);
}, [files])
const handleClick = () => {
  console.log("han")
  allItems("files");
  // const files  = fetchData("files");
  // setFiles(files);
}

  return (
    <div>
        <button onClick={() => handleClick()}>List all items </button>
        {
          files.map((file) =>{
            return <div>
              <h3>{file.name}</h3>
              <BsFiletypePdf /> 
              </div>
          })
        }
    </div>
  )
}
