import React, {useEffect} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, connect } from 'react-redux';
import store from './redux/redux-store';
import HeaderContainer from './components/Header/HeaderContainer';
import NavContainer from "./components/Navbar/NavContainer";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";  загружалась вмесьте с компонентой App
//import ProfileContainer from "./components/Profile/ProfileContainer";  загружалась вмесьте с компонентой App
//import News from "./components/News/News";                             загружалась вмесьте с компонентой App
//import Music from "./components/Music/Music";                          загружалась вмесьте с компонентой App
//import Settings from "./components/Settings/Settings";                 загружалась вмесьте с компонентой App
//import UserContainer from "./components/Users/UsersContainer";         загружалась вмесьте с компонентой App
//import Login from "./components/Login/Login";                          загружалась вмесьте с компонентой App
import { initializeApp } from './redux/app-reducer';
import Preloader from "./components/common/Preloader/Preloader";

//ленивые компоненты, создаются для отложенного рендера
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer")); //теперь загружается(бандлится) когда мы переходим на неё
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer")); //теперь загружается(бандлится) когда мы переходим на неё
const News = React.lazy(() => import("./components/News/News"));                            //теперь загружается(бандлится) когда мы переходим на неё
const Music = React.lazy(() => import("./components/Music/Music"));                         //теперь загружается(бандлится) когда мы переходим на неё
const Settings = React.lazy(() => import("./components/Settings/Settings"));                //теперь загружается(бандлится) когда мы переходим на неё
const UserContainer  = React.lazy(() => import("./components/Users/UsersContainer"));       //теперь загружается(бандлится) когда мы переходим на неё
const Login = React.lazy(() => import("./components/Login/Login"));                         //теперь загружается(бандлится) когда мы переходим на неё

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
                <React.Suspense fallback={<div>Loading...</div>}> {/*Все ленивые рендеры должны быть внутри компоненты Suspense*/}
                    <Routes>                                      {/*<div>Loading...</div> - мы видим пока загружается ленивы компонент*/}
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
                </React.Suspense>
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
