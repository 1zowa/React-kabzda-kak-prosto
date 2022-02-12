import React from 'react';
import style from './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Music from './components/Music/Music';
import Videos from './components/Videos/Videos';
import Settings from './components/Settings/Settings';
import {Route, Routes} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
    return (
        <div className='App'>
            <HeaderContainer/>
            <Sidebar/>
            <Routes className={style.appWrapperContent}>
                <Route path="/profile/" element={<ProfileContainer/>}>
                </Route>
                <Route path={'/dialogs/'} element={<DialogsContainer/>}>
                    <Route path={':chatId'}/>
                </Route>
                <Route path="/music" element={<Music/>}/>
                <Route path="/videos" element={<Videos/>}/>
                <Route path="/users" element={<UsersContainer/>}/>
                <Route path="/setting" element={<Settings/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;
