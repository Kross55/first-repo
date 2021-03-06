import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Routes, Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav friends={props.state.sidebar.friends}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs/*" element=
                        {<Dialogs
                            answers={props.state.dialogsPage.answers}
                            messages={props.state.dialogsPage.messages}
                            dialogs={props.state.dialogsPage.dialogs}
                            newMessageBody={props.state.dialogsPage.newMessageBody}
                            dispatch={props.dispatch}
                            /*updateNewMessageText={props.updateNewMessageText}
                            addMessage={props.addMessage}*//>}/>
                    <Route path="/profile" element=
                        {<Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                            /*addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}*//>}/>
                    <Route path="/news" element=
                        {<News/>}/>
                    <Route path="/music" element=
                        {<Music/>}/>
                    <Route path="/settings" element=
                        {<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;
