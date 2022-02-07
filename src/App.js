import React from 'react';
import style from './App.css'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Videos from './components/Videos/Videos';
import Settings from './components/Settings/Settings';
import {Route, Routes} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {
    return (
        <div className='App'>
            <Header/>
            <Sidebar/>
            <Routes className={style.appWrapperContent}>
                <Route path="/profile" element={<ProfileContainer/>}/>
                <Route path="/dialogs/*" element={<Dialogs/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/videos" element={<Videos/>}/>
                <Route path="/users" element={<UsersContainer/>}/>
                <Route path="/setting" element={<Settings/>}/>
            </Routes>
        </div>
    );
}

export default App;
