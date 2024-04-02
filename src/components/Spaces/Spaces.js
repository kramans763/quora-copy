import React, { useEffect, useState } from 'react'
import "./Spaces.css"
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {FaRegCompass} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
import Navbar from '../Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getChannels } from '../../Action';
import spaceImg from "../../assets/space-img.webp"
import spaceph from "../../assets/space 2.webp"

import { useNavigate } from 'react-router-dom';
import CreateSpace from './CreateSpace';
const Spaces = () => {
    const dispatch=useDispatch();
    const channels = useSelector((state) => state.reducer.channels);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const [buttonDisabled, setButtonDisabled] = useState(true);
  
    const navigate=useNavigate();

    const openPopup = () => {
      setIsPopupOpen(true);
      
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
    };
   
    useEffect(()=>{
      dispatch(getChannels());
      
    },[dispatch]);
    console.log("ch", channels);

  
   
    
    const handleUnderConst=()=>{
     navigate('/working');
    }

    const handlePageDetail=(name, description)=>{
       navigate('/channel_detail_page' , { state: {name , description} } );
    }
  
  return (
    <div className='dark:bg-neutral-900 dark:text-zinc-400'>
    <Navbar/>
     <div className='spaces '>   
        <div className='spaces-top'>
            <div className='spaces-top-left dark:bg-neutral-800 dark:text-zinc-400'>
               <h2>Your Spaces</h2>
               <p>Follow Spaces to explore your interests on Quora.</p>
               <div className='spaces-top-btns'>
                  <div className='spaces-top-btn' onClick={openPopup}>
                    <AiOutlinePlusCircle/>
                    Create Spaces
                   </div>
                   <div className='spaces-top-btn' onClick={handleUnderConst}>
                     <FaRegCompass/>
                     Discover Spaces 
                   </div>
                </div>
            </div>
            <div className='spaces-top-right dark:bg-neutral-800 dark:text-zinc-400  '>
                <div className='spaces-top-right-top'>
                    <p>Pending Invites</p>
                </div>
                <div className='spaces-top-right-btm'>
                   <AiOutlineMail/>
                   No Invites
                </div>
            </div>
        </div>
        <div className='spaces-main-content '>
            <h2>Discover Spaces</h2>
            <p>Spaces you might like</p>
            <div className='spaces-container'>
             {
                channels && channels.length && channels.map((item)=>{
                  return(
                    <div className='spaces-card dark:bg-neutral-800 dark:text-zinc-400' onClick={() =>handlePageDetail(item.name, item.description)}>
                        <img src={spaceImg} alt="" className='cover-photo'/>
                        <img src={spaceph} alt="" className='profile-photo' />
                        <div className='ch-name-content'>
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                        </div>
                    </div>
                  )  
                })
              }
            </div>
        </div>
     </div>
     {isPopupOpen &&  
        <CreateSpace
         channels={channels}
         handlePageDetail={handlePageDetail}
         isOpen={isPopupOpen}
         onClose={closePopup}
        />
     }
    </div>
  )
}

export default Spaces