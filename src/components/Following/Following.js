import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "./Following.css"
import Navbar from '../Navbar/Navbar'
const Following = () => {
  return (
    <div className='following quora dark:bg-neutral-900 dark:text-zinc-400'>
         <div className='navbar-home'>
           <Navbar/>
        </div>
        <div className='main-content'>
            <div className='sidebar-following'>
              <Sidebar/>
            </div>
            <div className='following-content'>
               <img src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.build_following_feed_lightmode.png-26-cc59fbc57541079b.png" alt="" />
               <p>No New Notifications</p>
               <p>Notifications you received in the last 30 days will show up here.</p>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Following