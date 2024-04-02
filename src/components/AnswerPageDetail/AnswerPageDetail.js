import React, { useEffect, useState } from 'react'
import "./AnswerPageDetail.css"
import Navbar from '../Navbar/Navbar'
import { useLocation } from 'react-router-dom';
import {SlNote} from 'react-icons/sl';
import { BiSolidDownvote } from "react-icons/bi";
import PostAnswer from '../PostAnswer/PostAnswer';


const AnswerPageDetail = () => {
    const { state } = useLocation();
     const id=state.id;
     const title=state.title;
     console.log("title",title)
     const [comments, setComments] = useState([]);
     const authToken = localStorage.getItem('authToken');
     const [isPopupOpen, setPopupOpen] = useState(false);
     const userData = JSON.parse(localStorage.getItem('userData'));
     const [selectedTitle, setSelectedTitle] = useState('');
     const [selectedId, setSelectedId] = useState('');
     const [activeDownvotes, setActiveDownvotes] = useState({});

    const fetchPostData = async () => {
      const authToken=localStorage.getItem('authToken');
      try {
        const response = await fetch(`https://academics.newtonschool.co/api/v1/quora/post/${id}/comments`, {
          headers: {
             'Authorization': `Bearer ${authToken} `,
             'projectID': 'f104bi07c490'
            }
         });
         let data = await response.json();
         data=data.data;
         setComments(data); // Update state with fetched data
        
    } catch (error) {
      console.error('Error fetching data:', error);
      
    }
  };

  useEffect(() => {
    fetchPostData(); 
  }, [id, fetchPostData]);
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
      [id]: !prevState[id] // Toggle the active state for the specific ID
    }));
  };
  console.log("comments", comments);
  return (
    <div>
      <Navbar/>
      <div className='answer-detail-page dark:bg-neutral-900 dark:text-zinc-400'>
        <div className='answer-detail-page-top dark:bg-neutral-700 dark:text-zinc-400'>
          <h3>{title}</h3>
          <div className='answer-card-buttom'>
            <div className='answer-button' onClick={() => openPopup(title, id)}>
                <SlNote />
                <p>Answer</p>
            </div>
            <div className={`downvote ${activeDownvotes[id] ? 'active' : ''}`} onClick={() => dislike(id)} >
              <BiSolidDownvote/>
            </div>
          </div>
        </div>
         
         <div className='answer-detail-page-main dark:bg-neutral-700 dark:text-zinc-400'>
              {
                comments.length ? comments.map((comment) => {
                  return (
                    <div className='comments-content'>
                      <div className='comments-content-upper'>
                        <img src='https://qsf.cf2.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png' alt='img' />
                        <p>user</p>
                      </div>
                      <div className='comments-content-lower'>
                        <p>{comment.content}</p>
                      </div>
                    </div>
                  )
                })
                :
                ''
              }
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

export default AnswerPageDetail