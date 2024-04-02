import React, { useEffect } from 'react'
import "./Feed.css"
import { getPosts } from '../../Action';
import { useDispatch, useSelector } from 'react-redux';
import QueryBox from '../QueryBox/QueryBox';
import CardComponent from '../CardComponent/CardComponent';

const Feed = ({ searchResults, pageType }) => {
   
   const feedDetails = useSelector((state) => state.reducer.posts);
   const dispatch=useDispatch();
   
   const userData = JSON.parse(localStorage.getItem('userData'));
   
   console.log("feed", feedDetails);
  
  
   useEffect(()=>{
      dispatch(getPosts());
    
   },[dispatch]) 


  return (
    <div className='main-feed'>
         {pageType === 'searchPage' ? null : (
            <div className='main-feed-top'>
               <QueryBox/>
            </div>
         )}
         <div className='main-feed-content'>
            {(pageType === 'searchPage' ? searchResults : feedDetails).map((item) => (
               <CardComponent
                  item={item}  
                  userData={userData}
                 
               />
            ))}
         </div> 
      </div>
  )
}

export default Feed