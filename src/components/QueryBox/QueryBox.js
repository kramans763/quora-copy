import React from 'react'
import "./QueryBox.css"
import {BsQuestionSquare} from 'react-icons/bs';
import {SlNote} from 'react-icons/sl';
import {RxPencil1} from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

const QueryBox = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const navigate=useNavigate();
    const handleQues=()=>{
      navigate("/addQues")
    }
  return (
     <div className='querybox dark:bg-neutral-800 dark:text-zinc-400'>
        <div className='querybox-top'>
            <div className='querybox-username'>{userData.name[0].toUpperCase()}</div>
            <div className='querybox-top-para dark:bg-neutral-700 dark:text-zinc-400' onClick={handleQues}> <p>What do you want to ask or share?</p> </div>
        </div>
        
        <div className='querybox-bottom'>
           <div className='querybox-bottom-parts' onClick={handleQues} style={{ flexGrow: 1 }} >
            <BsQuestionSquare/>
            <p>Ask</p>
           </div>
           <div className='querybox-bottom-parts' onClick={handleQues} style={{ flexGrow: 1 }} >
             <SlNote/>
             <p>Answer</p>
           </div>
           <div className='querybox-bottom-parts' onClick={handleQues} style={{ flexGrow: 1 }}>
            <RxPencil1/>
            <p>Post</p>
           </div>
        </div>
     </div>
  )
}

export default QueryBox