import React, { useState } from 'react'
import { SlUserFollow } from "react-icons/sl";
import Navbar from '../Navbar/Navbar';

const MyProfileDetail = () => {
    
    const userData = JSON.parse(localStorage.getItem('userData')).user;
    const [followStatus, setFollowStatus] = useState(false); 

    const toggleFollow = () => {
        setFollowStatus(!followStatus); 
    };
   
  return (
    <>
    <Navbar/>
    <div className='userComponent-page dark:bg-neutral-900 dark:text-zinc-400'>
    <div className='userComponent'>
        <div className='userComponent-left'>
            <div className='userComponent-left-top'>
                <div className='userComponent-left-top-left'>
                  <img src="https://quora-clone-psi.vercel.app/static/media/facebook-profile-picture-no-pic-avatar.191a33733d14b57a0134.webp" alt="" />
                </div>
                <div className='userComponent-left-top-right'>
                   <p className='userComponent-author'> {userData.name} </p>
                   <div className='userComponent-follow-btn'   onClick={toggleFollow} style={{ backgroundColor: followStatus ? '#EFF0F0' : 'blue', color: followStatus ? 'blue' : 'white' }}>
                     <SlUserFollow/>
                     <p>{followStatus ? 'Following' : 'Follow'}</p>
                   </div>
                </div>
            </div>
            <div className='userComponent-left-content'>
                  <p>No post yet.....</p>
            </div>
        </div>
        <div className='userComponent-right'>
           <div className='userComponent-right-top'>
             <p>Credentials and Highlights</p>
           </div>
           <div className='userComponent-right-lower'>
           <p>Phone number: <span className="phone-number">No data found</span></p>
           <p>Email: <span className="phone-number">{userData.email}</span></p>
           <p>joined 2024</p>
           </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default MyProfileDetail