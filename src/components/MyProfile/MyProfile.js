import React, { useEffect, useState } from 'react'
import "./MyProfile.css"
import { RiMessage2Line } from "react-icons/ri";
import { TbSpeakerphone } from "react-icons/tb";
import { FiDollarSign } from "react-icons/fi";
import { IoIosStats } from "react-icons/io";
import { BsBookmarks } from "react-icons/bs";
import { RiDraftLine } from "react-icons/ri";
import ThemeSwitcher from "../Navbar/ThemeSwitcher" 
import { useNavigate } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
const MyProfile = () => {
     const userData = JSON.parse(localStorage.getItem('userData')).user;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const navigate=useNavigate();
    const[isPageOpen,SetPageOpen]=useState(true);
  useEffect(() => {
    
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      
      setIsLoggedIn(true);
      if (userData && userData.name) {
        setUserName(userData.name);
      }
    }
  }, [userData]);

  const handleLogout = () => {

    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/login');
  };
  const handleClose=()=>{
    SetPageOpen(false);  
  }
  const handleConstruction =()=>{
    navigate('/working')
  }
 
  const handleMyProfile=()=>{
    navigate('/myprofile');
  }

  return (
    <>
    {isLoggedIn && isPageOpen && (
    <div className="user-info-popup dark:bg-neutral-800 dark:text-zinc-400" >
      <div className='popup-close' onClick={handleClose}>
            <RxCross2/>
          </div>
    <div className='user-info-popup-top' onClick={handleMyProfile} >
      <div className='userPic'>
         {userData.name[0].toUpperCase()}
      </div>
       <span className="user-name">{userName}</span>
    </div>
    <div className='user-info-popup-contents '>
      <div className='user-info-popup-content' onClick={handleConstruction}>
        <RiMessage2Line/>
        <p>Message</p>
      </div>
      <div className='user-info-popup-content' onClick={handleConstruction}>
        <TbSpeakerphone/>
        <p>Create Aid</p>
      </div>
      <div className='user-info-popup-content' onClick={handleConstruction}>
        <FiDollarSign />
        <p>Monetization</p>
      </div>
      <div className='user-info-popup-content' onClick={handleConstruction}>
        <IoIosStats />
        <p>Your content $ stats</p>
      </div>
      <div className='user-info-popup-content' onClick={handleConstruction}>
        <BsBookmarks/>
        <p>Bookmarks</p>
      </div>
      <div className='user-info-popup-content' onClick={handleConstruction}>
        <RiDraftLine />
        <p>Draft</p>
      </div>
    </div>
    <div className='user-info-popup-down'>
      <div className="dark-light" >
        <ThemeSwitcher />
      </div>
      <p>Setting</p>
      <p>Help</p>
      <p onClick={handleLogout}>Logout</p>
    </div>
    <div className='user-info-popup-footer'>
      
      <a href="https://www.quora.com/about">About</a>
      <a href="https://www.careers.quora.com/">Careers</a>
      <a href="https://www.quora.com/about/tos">Terms</a>
      <a href="https://www.quora.com/about/privacy">Privacy</a>
      <a href="https://www.quora.com/about/acceptable_use">Acceptable Use </a>
      <a href="https://business.quora.com/">Bussiness</a>
      <a href="https://www.quora.com/press">Press</a>
      <a href="https://www.quora.com/about/your_ad_choices">Your Add Choice</a>
      <a href="https://www.quora.com/about/grievance">Grievance Officer</a>
      
    </div>
  </div>
    )}
  </>
  )
}

export default MyProfile