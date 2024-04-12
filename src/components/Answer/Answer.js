import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import starLogo from "../../assets/star2.png"
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../Action';
import "./Answer.css";


import { useNavigate } from 'react-router-dom';
import {SlNote} from 'react-icons/sl';
import { BiSolidDownvote } from "react-icons/bi";
import { GoPencil } from "react-icons/go";
import PostAnswer from '../PostAnswer/PostAnswer';

const Answer = () => {
    const quesDetails = useSelector((state) => state.reducer.posts);
    const dispatch=useDispatch();
    const [isPopupOpen, setPopupOpen] = useState(false);
    const userData = JSON.parse(localStorage.getItem('userData'));
    const [selectedTitle, setSelectedTitle] = useState('');
    const [selectedId, setSelectedId] = useState('');
    const [activeDownvotes, setActiveDownvotes] = useState({});
    const navigate=useNavigate();
    const authToken = localStorage.getItem('authToken');

 
    console.log("qdet", quesDetails);
   
 
    useEffect(()=>{
       dispatch(getPosts());
     
    },[dispatch]) 

    const openPopup = (title, id) => {
        setSelectedTitle(title);
        setSelectedId(id);
        setPopupOpen(true);
      };
    
      const closePopup = () => {
        setPopupOpen(false);
      };

      const dislike = (id) => {
        setActiveDownvotes(prevState => ({
          ...prevState,
          [id]: !prevState[id] 
        }));
      };

      const handlePageDetail=(id, title)=>{
        const updatedTitle=title.toLowerCase().replaceAll(" ", "-");

         navigate(`/pagedetail/${updatedTitle}` , { state: {id , title} } );
      }
      const handleUnderConstruction =()=>{
        navigate('/working')
      }
  return (
         <div className='dark:bg-neutral-900 dark:text-zinc-400'>
            <Navbar/>
           <div className='answer-page '>
             <div className='answer-page-left'>
               <div className='answer-page-left-top'>
                  <p>Questions</p>
               </div>
               <div className='answer-page-left-bottom'>
                  <p>Questions For You</p>
                  <p onClick={handleUnderConstruction}>Answer request</p>
                  <p onClick={handleUnderConstruction}>Drafts</p>
               </div>
             </div>
             <div className='answers dark:bg-neutral-800 dark:text-zinc-400 '>
              <div className='answer-heading'>
                <img src={starLogo} alt='star'/>
                <p>Questions for you</p>
             </div>
             <div className='answers-list'>
              { quesDetails && quesDetails.length
                 && quesDetails.slice(-5).map((item)=>{
                    return(
                        <div className='answer-card'>
                            <div onClick={() =>handlePageDetail(item._id, item.title)}>
                              <h5>{item.title}</h5>
                            </div>
                            <div className='answer-card-buttom'>
                                <div className='answer-button' onClick={() => openPopup(item.title, item._id)}>
                                  <SlNote/>
                                  <p>Answer</p>
                                </div>
                                <div className={`downvote ${activeDownvotes[item._id] ? 'active' : ''}`} onClick={() => dislike(item._id)} >
                                  <BiSolidDownvote/>
                                </div>
                            </div>
                            
                            
                        </div>
                    )
                 })
              }
             </div>
           </div >
            <div className='answer-page-right '>
                 <div className='answer-page-right-top' onClick={handleUnderConstruction}>
                  <p>Topics you know about</p>
                  <GoPencil/>
                 </div>
                 <div className='answer-page-right-bottom  dark:bg-neutral-800 dark:text-zinc-400'>
                  <img src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png" alt="bbb" />
                  <p>No topics yet</p>
                  <p className='answer-page-right-bottom-para2'>You’ll get better questions if you add more specific topics.</p>
                  <button onClick={handleUnderConstruction}>Add Topics</button>
                 </div>
            </div>
           {isPopupOpen && (
             <PostAnswer
             isOpen={isPopupOpen}
             onClose={closePopup}
             title={selectedTitle}
             userData={userData}
             authToken={authToken}
             selectedId={selectedId}
           />
        
            )}
          </div>
        </div>
  )
}

export default Answer