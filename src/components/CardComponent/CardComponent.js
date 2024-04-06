import React, { useState } from 'react';
import "./CardComponent.css"
import { BiSolidUpvote } from "react-icons/bi";
import { BiSolidDownvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { BsThreeDots } from "react-icons/bs";

const CardComponent = ({ pageType, item,  userData , updateCommentCount}) => {
    const { author, content,  title, likeCount, commentCount, _id } = item;
    const [likes, setLikes] = useState(likeCount || 0);
    const [upVote, setUpVote] = useState(false);
    const [downVote, setDownVote] = useState(false);
    const authToken = localStorage.getItem('authToken');
    const [newAnswer, setNewAnswer] = useState('');
    const[isCommentOpen, setIsCommentOpen]=useState(false);
    const[comments,setComments]=useState([]);
    const [commentOpenId, setCommentOpenId] = useState(null);
    const [commentsTopOpenId, setCommentsTopOpenId] = useState(null);
    const navigate=useNavigate();
    const [followStatus, setFollowStatus] = useState(false); 
    const [isCommentPopupOpen, setIsCommentPopupOpen] = useState(false);
    const [selectedCommentId, setSelectedCommentId] = useState(null);

    const togglePopup = (commentId) => {
      setIsCommentPopupOpen(!isCommentPopupOpen);
      setSelectedCommentId(commentId);
    };

    const toggleFollow = () => {
        setFollowStatus(!followStatus); 
    };
    
    const handleLike = () => {
        if (!upVote && !downVote) {
          setUpVote(true);
          setLikes((prev) => prev + 1);
        } else if (downVote) {
          setDownVote(false);
          setLikes((prev) => prev + 1);
        } else {
          setUpVote(false);
          setLikes((prev) => prev - 1);
        }
      };
    
      const handleDislike = () => {
        if (!upVote && !downVote) {
          setDownVote(true);
          setLikes((prev) => prev - 1);
    
        } else if (upVote) {
          setUpVote(false);
          setLikes((prev) => prev - 1);
        } else {
          setDownVote(false);
          setLikes((prev) => prev + 1);
        }
      };
      const handleComment=async(id)=>{
        try {
          const response = await fetch(`https://academics.newtonschool.co/api/v1/quora/post/${id}/comments`, {
            headers: {
               'Authorization': `Bearer ${authToken} `,
               'projectID': 'f104bi07c490'
              }
           });
           let data = await response.json();
           data=data.data;
           console.log("comment", data);
           setComments(data);
           setCommentOpenId(id);
           setCommentsTopOpenId(id);
           
          } catch (error) {
           console.error('Error fetching data:', error);
        
          }  
         setIsCommentOpen(!isCommentOpen);
        
      }
      
      const postAnswer = async (id) => {
        try {
          const response = await fetch(`https://academics.newtonschool.co/api/v1/quora/comment/${id}`, {
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
            const newComment = await response.json(); 
            console.log("newcomment",newComment);
            const newCommentData=newComment.data;
            if(newCommentData && newCommentData._id) {
              setComments(prevComments => [...prevComments, newCommentData]);
             }
            updateCommentCount(item._id, item.commentCount + 1);
            
          } else {
            alert('Failed to post answer');
          }
        } catch (error) {
          console.error('Error posting answer:', error);
        }
      };

      const handleDeleteComment = async (commentId) => {
        try {
            const response = await fetch(`https://academics.newtonschool.co/api/v1/quora/comment/${commentId}`, {
                method: 'DELETE',
                headers: {
                  'Authorization': `Bearer ${authToken}`,
                  'projectID': 'f104bi07c490'
                }
                  
            });
            if (response.ok) { 
              setComments(prevComments => prevComments.filter(comment => comment._id !== commentId));      
              updateCommentCount(item._id, item.commentCount - 1); 
            } else {
               
                alert('Failed to delete comment');
            }
        } catch (error) {
            console.error('Error deleting comment:', error);
        }
    };

      const handlePageDetail=(id, title)=>{
        const updatedTitle=title.toLowerCase().replaceAll(" ", "-");

         navigate(`/pagedetail/${updatedTitle}` , { state: {id , title} } );
      }

      const handleUserDetail=(item)=>{
        navigate('/user' , { state: {item} } )
      }
      
  return (
    <div className='card dark:bg-neutral-800 dark:text-zinc-400'>
      {
        pageType==='user'?'':
      
      <div className='card-upper' >
        <img src='https://qsf.cf2.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png'  onClick={() =>handleUserDetail(item)} alt='img' />
        <div className='upper-right'>
          <p  onClick={() =>handleUserDetail(item)}>{author?.name} </p>
          <p  onClick={toggleFollow} style={{  color: followStatus ? 'grey' : 'blue' }}>{followStatus ? 'Following' : 'Follow'}</p>
        </div>
      </div>
    }
      <div className='card-details'>
        <h3  onClick={() =>handlePageDetail(item._id, item.title)}>{title}</h3>
        <p>{content}</p>
        {item.images ? <img src={item.images} alt="" /> : ''}
      </div>
      <div className='like-comment '>
        <div className='upvote-downvote dark:bg-neutral-700 dark:text-zinc-400'>
          <div className='upvote'  onClick={handleLike}>
            <div  className={`like-expression ${upVote ? 'active' : ''}`}> < BiSolidUpvote /> </div>
            <p>Upvote</p>
            <p>{likes}</p>
            
          </div>
          <div className={`downvote ${downVote ? 'active' : ''}`}  onClick={handleDislike} >
            <BiSolidDownvote />
          </div>
        </div>
        <div className='comment-logo' onClick={() => handleComment(_id)}>
          <FaRegComment />
          <p>{commentCount}</p>
        </div>
      </div>
      {isCommentOpen &&
        <div className='comments'>
          {commentsTopOpenId === _id &&
            <div className='comments-top dark:bg-neutral-700 dark:text-zinc-400 '>
              <div className='comments-top-user'> {userData.name[0].toUpperCase()}</div>
              <div className='comments-top-input'>
                <input type="text"
                       placeholder='Add a comment...'
                       value={newAnswer}
                       onChange={(e) => setNewAnswer(e.target.value)} 
                />
              </div>
              <div className='comments-top-button' onClick={() => postAnswer(_id)}>
                <button>Add Comment</button>
              </div>
            </div>
          }
          {commentOpenId === _id &&
            <div className='comments-contents'>
              {
                comments.length ? comments.map((comment) => {
                 return (
                    <div className='comments-content'>
                      <div className='comments-content-upper'>
                        <img src='https://qsf.cf2.quoracdn.net/-4-images.new_grid.profile_default.png-26-688c79556f251aa0.png' alt='img' />
                        <p>{comment.author_details? comment.author_details.name : userData?.name}</p>
                      </div>
                      <div className='comments-content-lower'>
                        <p>{comment.content}</p>
                        {comment.author_details?._id === userData._id && (
                          <div onClick={() => togglePopup(comment._id)}><BsThreeDots /></div>
                        )}
                        {isCommentPopupOpen && selectedCommentId === comment._id && (
                          <div className='comment-popup'>
                            <p onClick={() => handleDeleteComment(comment._id)}>Delete</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })
                :
                ''
              }
            </div>
          }
        </div>
      }
    </div>
  )
}

export default CardComponent;