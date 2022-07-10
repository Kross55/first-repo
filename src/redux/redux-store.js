import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from './profileReduser';
import dialogsReducer from "./dialogsReduser";
import sidebarReducer from "./sidebarReduser";
import usersReducer from "./myFriendsReduser";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;


