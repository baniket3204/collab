import React from 'react'
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Comment } from './Comment';


export const Modal = ({setModal , resume , fname}) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className='backshadow'>
        <div className='custom-modal'>
          <div className='delete-icon' onClick={() => setModal(false)}>
             X
          </div>
          {resume !== null &&(
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
           <Viewer fileUrl={resume} plugins={[defaultLayoutPluginInstance]}/>  
          </Worker>
          )}
          <div>
          </div>
        </div>
        <Comment fname = {fname}/>
    </div>
  )
}
