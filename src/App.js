import React from 'react';
import './App.css';
import Quora from './components/Home/Home';
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


function App() {
  
  return (
    <div className="App dark:bg-neutral-900 dark:text-zinc-400">
      <Routes>
        <Route path='/' element={<Quora/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/addQues' element={<AddQuestion/>}></Route>
        <Route path='/working' element={<UnderConstruction/>}></Route>
        <Route path='/answer' element={<Answer/>}></Route>
        <Route path='/pagedetail/:id' element={<AnswerPageDetail/>}></Route>
        <Route path='/spaces' element={<Spaces/>}></Route>
        <Route path='/notifications' element={<Notification/>}></Route>
        <Route path='/topicDetail' element={<SideBarDetailPage/>}></Route>
        <Route path='/following' element={<Following/>}></Route>
        <Route path='/channel_detail_page' element={<ChannelDetailPage/>}></Route>
        <Route path='/searchresult' element={<SearchResult/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/myprofile' element={<MyProfileDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;