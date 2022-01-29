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
import FifthDialog from './components/Dialogs/DialogItem/FifthDialog/FifthDialog';
import FirstDialog from './components/Dialogs/DialogItem/FirstDialog/FirstDialog';
import SecondDialog from './components/Dialogs/DialogItem/SecondDialog/SecondDialog';
import ThirdDialog from './components/Dialogs/DialogItem/ThirdDialog/ThirdDialog';
import FourthDialog from './components/Dialogs/DialogItem/FourthDialog/FourthDialog';
import SixthDialog from './components/Dialogs/DialogItem/SixthDialog/SixthDialog';
import DialogsItem from './components/Dialogs/DialogItem/DialogItem';

function App(props) {
  return (
    <div className='App'>
      <Header />
      <Sidebar dataSidebar={props.data.sideBarPage} />
      <Routes className={style.appWrapperContent}>
        <Route path="/profile"
          element={<Profile dataProfile={props.data.profilePage}
            addPost={props.addPost} textareaValue={props.textareaValue} />} />
        <Route path="/dialogs/*"
          element={<Dialogs dataDialogs={props.data.dialogsPage}
            addMessage={props.addMessage} messageValue={props.messageValue} />} ></Route>
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
