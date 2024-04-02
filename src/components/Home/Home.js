import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import "./Home.css";
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed';

import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
 
  useEffect(() => {
    
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      navigate('/login');
    }
  }, [navigate]);
  return (
    <div className='quora dark:bg-neutral-900 dark:text-zinc-400' >
        <div className='navbar-home dark:bg-neutral-900 dark:text-zinc-400'>
           <Navbar/>
        </div>
        <div className='main-content dark:bg-neutral-900 dark:text-zinc-400'>
          <div className='sidebar-home'>
             <Sidebar/> 
          </div> 
          <div className='feeds dark:bg-neutral-900 dark:text-zinc-400'>
             <Feed/>
          </div>
          <div className='advertisement dark:bg-neutral-900 dark:text-zinc-400'>
             <div className='advertisement-top dark:bg-neutral-700 dark:text-zinc-400'>

             </div>
             <div className='advertisement-middle dark:bg-neutral-500 dark:text-zinc-400'>
                <p>advertisement</p>
             </div>
             <div className='advertisement-lower dark:bg-neutral-700 dark:text-zinc-400'></div>
          </div>
        </div>
    </div>
  )
}

export default Home