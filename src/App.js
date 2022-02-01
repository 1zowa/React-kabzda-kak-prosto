import React from 'react';
import style from './App.css'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Videos from './components/Videos/Videos';
import Settings from './components/Settings/Settings';
import { Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <div className='App'>
      <Header />
      <Sidebar dataSidebar={props.data.sidebarPage} />
      <Routes className={style.appWrapperContent}>
        <Route path="/profile"
          element={<Profile dataProfile={props.data.profilePage}
            dispatch={props.dispatch} />} />
        <Route path="/dialogs/*"
          element={<Dialogs dataDialogs={props.data.dialogPage} dispatch={props.dispatch} />} />
        <Route path="/music"
          element={<Music />} />
        <Route path="/videos"
          element={<Videos />} />
        <Route path="/setting"
          element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
