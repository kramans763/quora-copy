import React, { useEffect, useState } from 'react'
import "./Feed.css"
import { getPosts } from '../../Action';
import { useDispatch, useSelector } from 'react-redux';
import QueryBox from '../QueryBox/QueryBox';
import CardComponent from '../CardComponent/CardComponent';

const Feed = ({ searchResults, pageType }) => {
   
   const feedDetails = useSelector((state) => state.reducer.posts);
   const dispatch=useDispatch();
   const [updatedFeedDetails, setUpdatedFeedDetails] = useState([]);
   const userData = JSON.parse(localStorage.getItem('userData')).user;
   
   console.log("feed", feedDetails);
  
  
   useEffect(()=>{
      dispatch(getPosts());
    
   },[dispatch]) 
   
   useEffect(() => {
      // Assuming feedDetails is updated after fetching posts
      setUpdatedFeedDetails(feedDetails);
   }, [feedDetails]);
  
   const updateCommentCount = (itemId, newCount) => {
      setUpdatedFeedDetails(prevDetails =>
        prevDetails.map(item =>
          item._id === itemId ? { ...item, commentCount: newCount } : item
        )
      );
   };

  return (
    <div className='main-feed'>
         {pageType === 'searchPage' ? null : (
            <div className='main-feed-top'>
               <QueryBox/>
            </div>
         )}
         <div className='main-feed-content'>
            {(pageType === 'searchPage' ? searchResults : updatedFeedDetails).map((item) => (
               <CardComponent
                  item={item}  
                  userData={userData}
                  updateCommentCount={updateCommentCount}
                 
               />
            ))}
         </div> 
      </div>
  )
}

export default Feed