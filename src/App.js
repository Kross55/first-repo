import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Routes, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Navbar/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavContainer />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs/*" element=
                        {<DialogsContainer />}/>
                    <Route path="/profile" element=
                        {<Profile />}/>
                    <Route path="/news" element=
                        {<News/>}/>
                    <Route path="/music" element=
                        {<Music/>}/>
                    <Route path="/settings" element=
                        {<Settings/>}/>
                    <Route path="/friends" element=
                        {<UsersContainer />}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;
