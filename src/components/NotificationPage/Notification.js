import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import "./Notification.css"

const Notification = () => {
    const[component,setComponent]=useState('All Notifications')
  return (
    <div className="notification-page dark:bg-neutral-900 dark:text-zinc-400" >
        <Navbar/>
    <div className="notification-page-container ">
        <div className="notification-sidenav ">               
            <div className="question-lefttitle">Filter</div>
            <div  onClick={()=>setComponent('All Notifications')}>All Notifications</div>              
            <div  onClick={()=>setComponent('Stories')}>Stories</div>                   
            <div  onClick={()=>setComponent('Question')}>Questions</div>
            <div  onClick={()=>setComponent('Spaces')}>Spaces</div>                   
            <div  onClick={()=>setComponent('People Updates')}>People updates</div>                    
            <div  onClick={()=>setComponent('Comments and mentions')}>Comments and mentions</div>                         
            <div  onClick={()=>setComponent('Upvotes')}>Upvotes</div>                  
            <div  onClick={()=>setComponent('Your content')}>Your content</div>                  
            <div onClick={()=>setComponent('Your profile')}>Your profile</div>                    
            <div  onClick={()=>setComponent('Announcements')}>Announcements</div>                    
            <div  onClick={()=>setComponent('Earnings')}>Earnings</div>                  
            <div  onClick={()=>setComponent('Subscriptions')}>Subscriptions</div>                    
        </div>
       
         <div className="notification-main">
                <div className='notification-main-top'>
                    <p>{component}</p>
                    <p>Setting</p>
                </div>
                
                <div className='notification-main-icon'>
                    <img src="https://cdn-icons-png.flaticon.com/512/4305/4305480.png" alt="" />
                    <p>No New Notifications</p>
                    <p>Notifications you received in the last 30 days will show up here.</p>
                </div>
         </div>
        
         </div>
        </div>
   


  )
}

export default Notification