import React from 'react'
import { useLocation } from 'react-router-dom';
import "./ChannelDetailPage.css";
import coverPhoto from "../../assets/space-img.webp"
import profilePhoto from "../../assets/space 2.webp"
import Navbar from "../Navbar/Navbar"
const ChannelDetailPage = () => {
  const { state } = useLocation();
  const{name, description}=state;
  console.log(name, description);
  return (
    <>
    <Navbar/>
    <div className='channel-detail-page dark:bg-neutral-900 dark:text-zinc-400'>
        <div className='channel-detail-page-top'>
           <div className='blur-section'>
            <img src={coverPhoto} alt="" />
           </div>
           <div className='channel-cover-img'>
            <img src={coverPhoto} alt="" />
           </div>
           <div className='channel-profile-img'>
            <img src={profilePhoto} alt="" />
           </div>
           <div className='channel-detail-content'>
            <h1>{name}</h1>
            <p>{description}</p>
           </div>
        </div>
        <div className='channel-detail-page-lower dark:bg-neutral-700 dark:text-zinc-400'>
           <div className='channel-detail-page-lower-top'>
            <p>Post</p>
           </div>
           <div className='channel-detail-page-lower-bottom'>
            <p>No Posts Yet</p>
           </div>
        </div>
    </div>
    </>
  )
}

export default ChannelDetailPage