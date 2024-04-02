import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
const CreateSpace = ({channels, handlePageDetail, isOpen, onClose}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);
   

    
    const toggleButton = () => {
      
        if (title.trim() !== '' && description.trim() !== '') {
          setButtonDisabled(false);
        } else {
          setButtonDisabled(true);
        }
      };
  return (
    isOpen && (
    <div className='popup '> 
    <div className='popup-content dark:bg-neutral-700 dark:text-zinc-400'>
       <div className='close' onClick={onClose}>
           <RxCross2/>
       </div>
       <div className='popup-content-upper'>
         <h4>Create a Space</h4>
         <p>Share your interests, curate content, host discussions, and more.</p>
       </div>
       <div className='popup-content-middle'>
         <h5>Name</h5>
         <p>This can be changed in Space settings.</p>
         <input
           type="text"   
           value={title}
           onChange={(e) => {
             setTitle(e.target.value);
             toggleButton(); 
           }}
         />
       </div>
       <div className='popup-content-lower'>
         <h5>Brief description</h5>
         <p>Include a few keywords to show people what to expect if they join.</p>
         <input

            value={description}
            onChange={(e) => {
             setDescription(e.target.value);
             toggleButton(); 
           }}
         />

       </div>
       <div className='popup-content-lower-button'>
         <button disabled={buttonDisabled} onClick={() =>handlePageDetail(channels[0].name, channels[0].description)}>Create</button>
       </div>
     
   </div> 
  </div> 
    )
  )
}

export default CreateSpace