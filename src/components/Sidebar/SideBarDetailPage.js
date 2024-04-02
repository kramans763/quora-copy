import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from './Sidebar';
import "./SideBarDetailPage.css"

const SideBarDetailPage = () => {
    const { state } = useLocation();
    const channelName=state.chName;
    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollowBtn = () => {
        setIsFollowing(prevState => !prevState);
    };
  return (
    <div className='dark:bg-neutral-900 dark:text-zinc-400'>
         <div className='navbar-home '>
           <Navbar/>
        </div>
        <div className='main-content'>
          <div className='sidebar-home'>
             <Sidebar/> 
          </div> 
          <div className='feed-sidebar '>
             <div className='sidebar-page-detail dark:bg-neutral-700 dark:text-zinc-400'>
                <img src="https://qsf.cf2.quoracdn.net/-4-ans_frontend_assets.images.tribes.defaults.space_icon_yellow.png-26-fe83a11d61dd4889.png" alt="" />
                <div className='name-follow'> 
                   <div className='ch-name'>
                     <h3>{channelName}</h3>
                   </div>  
                    <div className={`follow-btn ${isFollowing ? 'following' : ''}`} onClick={handleFollowBtn}>
                       <p>{isFollowing ? 'Following' : 'Follow'}</p>
                    </div>
                </div>
             </div>
             <div className='read'>
             <p><span style={{ borderBottom: '4px solid #B91C1C', paddingBottom: '12px', color:'#B91C1C' }}>Read</span></p>
             </div>
          </div>
          <div className='other '>
             <div className='related-topic dark:bg-neutral-700 dark:text-zinc-400'>
             <p>Related Topic</p>
             <p>Comming soon</p>
             </div>
          </div>
        </div>
    </div>
  )
}

export default SideBarDetailPage