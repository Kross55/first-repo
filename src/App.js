import React, {useEffect} from "react";
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
import Login from "./components/Login/Login";
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import Preloader from "./components/common/Preloader/Preloader";
import store from './redux/redux-store';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const App = (props) => {
    
    useEffect(() => {
        props.initializeApp()
    }, [initializeApp])

    if (!props.initialized) {
        return <Preloader />
    }
    return (
            <div className="app-wrapper">
                <HeaderContainer />
                <NavContainer />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/dialogs/*" element=
                            {<DialogsContainer />} />
                        <Route path="/profile/*" element=
                            {<ProfileContainer />}>
                            <Route path=":userIdNew" element=
                                {<ProfileContainer />} />
                        </Route>
                        <Route path="/news" element=
                            {<News />} />
                        <Route path="/music" element=
                            {<Music />} />
                        <Route path="/settings" element=
                            {<Settings />} />
                        <Route path="/friends" element=
                            {<UserContainer />} />
                        <Route path="/login" element=
                            {<Login />} />
                    </Routes>
                </div>
            </div>
        );
};

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, { initializeApp })(App);

const SamuraiJsApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store} >
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
}

export default SamuraiJsApp
