import React, { useEffect, useState } from 'react'
import { allItems } from './Firebase'
import { fetchData , filterFiles } from './helpers'
import { BsFiletypePdf } from 'react-icons/bs';
import { Modal } from './Modal';
import { SearchBar } from './SearchBar';


export const Dashboard = () => {

  const [files , setFiles] = useState(fetchData('files'));
  useEffect(() => {
    window.addEventListener('storage', (e) =>{
      if(e.key === 'files') setFiles(fetchData('files'));
    })
  }, [])
  const handleClick = () => {
  console.log("han")
  allItems("files")
  location.reload();
  // setToogle(!toogle);
  // console.log("hell")
  // console.log(JSON.stringify( files ,  new Set(files.map((file) => file.name))))
  // console.log("happened")
  // console.log(removeDuplicates(files, it => it.name));
  // localStorage.setItem( "files" , JSON.stringify([removeDuplicates(files, it => it.name)]))
  // console.log( typeof( JSON.stringify(removeDuplicates(files, it => it.name))));
  // JSON.stringify([removeDuplicates(files, it => it.name)]);
  // const updatedfiles = files.slice(1);
  // localStorage.setItem("files" , JSON.stringify(updatedfiles));
  // console.log(updatedfiles);
  // new check
  //  const uniqueObjects = findUniqueObjects(files); 
  //  console.log("unique created" , uniqueObjects);
  // console.log(uniqueObjects);
  //  localStorage.setItem("files" , JSON.stringify([... uniqueObjects]));
  // console.log(files);
  // const mostup = files.slice(1);
  // console.log("mostup" , mostup)
  // localStorage.setItem("files" , JSON.stringify([...mostup]));
}

const[fname , setFname] = useState(null);
const[modal , setModal] = useState(false);
const[resume , setResume] = useState(null);

const handlePDF =(e)=>{
  console.log(e.name , e.URL)
  setResume(e.URL);
  setModal(true);
  setFname(e.name);
 }

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');  
    const filteredFiles = filterFiles(files, searchQuery);

  return (
    <div>
      <div style={{display: 'flex', gap: '2rem', justifyContent: 'center'}}>
        <SearchBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />      
        <button onClick={() => handleClick()}>List all items </button>
      </div>
        {
          <ul style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)'}}>
            {filteredFiles.map(file => (<li key={file.key} onClick={() => handlePDF(file)} >
              <BsFiletypePdf size={100} style={{color : "red"}}/>
              <h3>{file.name}</h3>
              </li>))}
          </ul> 
        }
        {
          modal === true &&(<Modal setModal = {setModal} resume = {resume} fname = {fname}/>)
        }
    </div>
  )
}