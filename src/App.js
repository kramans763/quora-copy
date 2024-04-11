import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import AddQuestion from './components/AddQuestion/AddQuestion';
import UnderConstruction from './components/UnderConstruction/UnderConstruction';
import Answer from './components/Answer/Answer';
import AnswerPageDetail from './components/AnswerPageDetail/AnswerPageDetail';
import Spaces from './components/Spaces/Spaces';
import Notification from './components/NotificationPage/Notification';
import SideBarDetailPage from './components/Sidebar/SideBarDetailPage';
import Following from './components/Following/Following';
import ChannelDetailPage from './components/ChannelDetailPage/ChannelDetailPage';
import SearchResult from './components/SearchResult/SearchResult';
import User from './components/UserComponent/User';
import MyProfileDetail from './components/MyProfile/MyProfileDetail';
import WithAuthentication from './components/WithAuthentication';


function App() {
  
  return (
    <div className="App dark:bg-neutral-900 dark:text-zinc-400">
      <Routes>
      <Route path='/' element={<WithAuthentication Component={Home} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/addQues' element={<WithAuthentication Component={AddQuestion} />} />
        <Route path='/working' element={<WithAuthentication Component={UnderConstruction} />} />
        <Route path='/answer' element={<WithAuthentication Component={Answer} />} />
        <Route path='/pagedetail/:id' element={<WithAuthentication Component={AnswerPageDetail} />} />
        <Route path='/spaces' element={<WithAuthentication Component={Spaces} />} />
        <Route path='/notifications' element={<WithAuthentication Component={Notification} />} />
        <Route path='/topicDetail' element={<WithAuthentication Component={SideBarDetailPage} />} />
        <Route path='/following' element={<WithAuthentication Component={Following} />} />
        <Route path='/channel_detail_page' element={<WithAuthentication Component={ChannelDetailPage} />} />
        <Route path='/searchresult' element={<WithAuthentication Component={SearchResult} />} />
        <Route path='/user' element={<WithAuthentication Component={User} />} />
        <Route path='/myprofile' element={<WithAuthentication Component={MyProfileDetail} />} />
      </Routes>
    </div>
  );
}

export default App;