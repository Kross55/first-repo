import React from "react";
import "./App.css";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Routes, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Navbar/NavContainer";
import UserContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <NavContainer />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs/*" element=
                        {<DialogsContainer />} />
                    <Route path="/profile/:userId?" element=
                        {<ProfileContainer />} />
                    <Route path="/news" element=
                        {<News />} />
                    <Route path="/music" element=
                        {<Music />} />
                    <Route path="/settings" element=
                        {<Settings />} />
                    <Route path="/friends" element=
                        {<UserContainer />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
