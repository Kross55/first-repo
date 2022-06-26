import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from './profileReduser';
import dialogsReducer from "./dialogsReduser";
import sidebarReducer from "./sidebarReduser";
import friendsReducer from "./friendsReduser";

let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: friendsReducer
})

let store = createStore(reducers)

export default store
