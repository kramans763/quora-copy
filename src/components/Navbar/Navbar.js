import React, { useEffect, useState } from 'react'
import "./Navbar.css";

import {BiSolidHome} from 'react-icons/bi';
import {IoIosListBox} from 'react-icons/io';
import {SlNote} from 'react-icons/sl';
import {IoNotificationsOutline} from 'react-icons/io5';
import {GoSearch} from 'react-icons/go'
import {MdOutlineLanguage} from 'react-icons/md';
import { HiUserGroup } from "react-icons/hi";

import { useLocation, useNavigate } from 'react-router-dom';

import signTick from "../../assets/signTick.jpg"


import MyProfile from '../MyProfile/MyProfile';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import MobileNavbarTop from '../MobileNavbar/MobileNavbarTop';


const Navbar = () => {
  const navigate=useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userName, setUserName] = useState('');
  const [showUserInfo, setShowUserInfo] = useState(false);
  const userData = JSON.parse(localStorage.getItem('userData'));
  const [showLanguagePopup, setShowLanguagePopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [lastClickedIcon, setLastClickedIcon] = useState(null);

  useState(() => {
    const currentPath = location.pathname;
    switch (currentPath) {
      case '/':
        setLastClickedIcon('home');
        break;
      case '/following':
        setLastClickedIcon('following');
        break;
      case '/answer':
        setLastClickedIcon('answer');
        break;
      case '/spaces':
        setLastClickedIcon('spaces');
        break;
      case '/notifications':
        setLastClickedIcon('notifications');
        break;
      default:
        break;
    }
  }, [location]);

   const handleIconClick = (iconName) => {
    setLastClickedIcon(iconName);
  };
 

  useEffect(() => { 
    const authToken = localStorage.getItem('authToken');
    if (authToken) {  
      setIsLoggedIn(true);
     
    }
  }, []);

  // const handleLogout = () => {

  //   localStorage.removeItem('authToken');
  //   setIsLoggedIn(false);
  //   navigate('/login');
  // };

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };
  const handleAnswerComp=()=>{
    handleIconClick('answer');
    navigate('/answer')
  }
  // const handleProfile=()=>{
  //   navigate('/login')
  // }

  const handleAddQustion=()=>{
    navigate('/addQues')
  }
  const handleHome =()=>{
    handleIconClick('home');
    navigate('/')
  }
  const handleSpaces=()=>{
    handleIconClick('spaces');
    navigate('/spaces');
  }
  const handleNotificationPage=()=>{
    handleIconClick('notifications');
    navigate('/notifications')
  }
  const handleFollowing=()=>{
    handleIconClick('following');
    navigate('/following');
  }
  const handleUnderConstruction =()=>{
    handleIconClick('working');
    navigate('/working')
  }
  const toggleLanguagePopup = () => {
    setShowLanguagePopup(!showLanguagePopup);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigate('/searchresult',  { state: {searchTerm} });
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
    <div className='qheader dark:bg-neutral-800 dark:text-zinc-400' >
      <div className='header-inner-conatiner'>
        <div className='qheader-logo'>
            <img src="https://seeklogo.com/images/Q/quora-logo-2E2DD559F2-seeklogo.com.png" alt="" />
        </div>
        <div className='qheader-icons'>
            <div  className={`qheader-icon ${lastClickedIcon === 'home' ? 'clicked' : ''}`} onClick={handleHome}>
              <BiSolidHome/>
            </div>
            <div className={`qheader-icon ${lastClickedIcon === 'following' ? 'clicked' : ''}`} onClick={handleFollowing}>
              <IoIosListBox/>
            </div>
            <div  className={`qheader-icon ${lastClickedIcon === 'answer' ? 'clicked' : ''}`} onClick={handleAnswerComp}>
             <SlNote/>
            </div>
            <div className={`qheader-icon ${lastClickedIcon === 'spaces' ? 'clicked' : ''}`} onClick={handleSpaces}>
              <HiUserGroup/>
             
            </div>
            <div className={`qheader-icon ${lastClickedIcon === 'notifications' ? 'clicked' : ''}`} onClick={handleNotificationPage}>
              <IoNotificationsOutline/>
            
            </div>
        </div>
        
        <div className='qheader-input dark:bg-neutral-700 dark:text-zinc-400 ' >
          <div  className='qheader-icon-search '>
            <GoSearch/>
          </div>
          <input type='text'
                 placeholder='Search Quora'
                 value={searchTerm}
                 onChange={handleChange}
                 onKeyPress={handleKeyPress}
                 className='dark:bg-neutral-700 dark:text-zinc-400'
          />
        </div>

        <div className='qheader-rem'>
          <div className='try-quora-plus' onClick={handleUnderConstruction}>
            <button>Try Quora+</button>
          </div>
          <div className='qheader-avatar' onClick={toggleUserInfo}> 
            <div className='userName'>
                {userData.name[0].toUpperCase()}
            </div>
            {showUserInfo && isLoggedIn && (
              <MyProfile/>
            )}
          </div>
          <div  className='qheader-icon' onClick={toggleLanguagePopup}>
            <MdOutlineLanguage/>
            {showLanguagePopup && (
              <div className='language-popup dark:bg-neutral-800 dark:text-zinc-400'>
                <div className='language-popup-top'>
                   Languages
                </div>
                <div className='language-popup-bottom'>
                  <div className='language-popup-bottom-left'>
                     <p>EN</p>
                     <p>English</p>
                  </div>
                  <div className='sign-tick'><img src={signTick} alt="" /></div>
                </div>
              </div>
            )}
          </div> 
          <button className='add-ques-btn' onClick={handleAddQustion}>Add Question</button>
          
        </div>
      </div>  
      </div> 
      <div className='mobile-navbar-top'>
        <MobileNavbarTop/>
      </div>
      <div className='mobile-navbar'>
        <MobileNavbar/>
      </div>
    </div>
  )
}

export default Navbar