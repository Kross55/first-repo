import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from './profileReduser';
import dialogsReducer from "./dialogsReduser";
import sidebarReducer from "./sidebarReduser";
import usersReducer from "./myFriendsReduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store

export default store;


