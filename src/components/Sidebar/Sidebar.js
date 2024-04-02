import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import { getChannels} from '../../Action';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import spaceImg from "../../assets/space 2.webp"
import { RxCross2 } from "react-icons/rx";
import CreateSpace from '../Spaces/CreateSpace';

const Sidebar = () => {
  const dispatch=useDispatch();
  const channels = useSelector((state) => state.reducer.channels);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate=useNavigate();

  const openPopup = () => {
    setIsPopupOpen(true);
      
  };
  
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const toggleButton = () => {
      
    if (title.trim() !== '' && description.trim() !== '') {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };
  
  const handleUnderConst=()=>{
   navigate('/working');
  }

  const handlePageDetail=(name, description)=>{
     navigate('/channel_detail_page' , { state: {name , description} } );
  }

  async function handleChannelClick(chName){
    navigate('/topicDetail' , { state: {chName} } );
   
  }
  
 
  useEffect(()=>{
    dispatch(getChannels());
    
  },[]);
  
  return (
    <>
    <div className='sidebar dark:bg-neutral-900 dark:text-zinc-400'>
      <div className='create-space dark:bg-neutral-700 dark:text-zinc-400'>
         <IoIosAdd/>
         <p onClick={openPopup}>Create Space</p>
      </div>
      <div className='channel-list'>  
        {
          channels && channels.length && channels.map((cName)=>{ 
          return(
          <div className='channel-name' onClick={()=>handleChannelClick(cName.name)} >
            <img src={spaceImg} alt="" />
             <p>{cName.name}</p>
          </div>
          )  
          })
        }
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
    </>
  )
}

export default Sidebar