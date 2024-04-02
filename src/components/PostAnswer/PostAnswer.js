// Popup.js
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import userPic from "../../assets/user.png"
import "./PostAnswer.css";
const PostAnswer = ({ isOpen, onClose, title, userData, authToken, selectedId }) => {
  const [newAnswer, setNewAnswer] = useState('');

  const postAnswer = async () => {
    try {
      const response = await fetch(`https://academics.newtonschool.co/api/v1/quora/comment/${selectedId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'projectID': 'f104bi07c490',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: newAnswer,
        }),
      });

      if (response.ok) {
        alert('Answer posted successfully');
        
      } else {
        alert('Failed to post answer');
      }
    } catch (error) {
      console.error('Error posting answer:', error);
    }
  };

  return (
    isOpen && (
      <div className='postAnswer dark:bg-neutral-900 dark:text-zinc-400'>
        <div className='postAnswer-contents'>
          <div className='postAnswer-close' onClick={onClose}>
            <RxCross2/>
          </div>
          <div className='postAnswer-user-details'>
            <img src={userPic} alt='' />
            <h3>{userData.name}</h3>
          </div>
          <h2>{title}</h2>
          <div className='postAnswer-form'>
            <input
              type='text'
              placeholder='Write your Answer'
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
            />
            <button className='postAnswer-btn' onClick={postAnswer}>
              Post
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default PostAnswer;