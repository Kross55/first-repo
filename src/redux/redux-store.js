import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from './profileReduser';
import dialogsReducer from "./dialogsReduser";
import sidebarReducer from "./sidebarReduser";
import usersReducer from "./myFriendsReduser";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;


