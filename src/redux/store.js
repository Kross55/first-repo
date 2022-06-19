import dialogsReducer from "./dialogsReduser";
import profileReducer from "./profileReduser";
import sidebarReducer from "./sidebarReduser";

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Leo'},
                {id: 2, name: 'Dony'},
                {id: 3, name: 'Miky'},
                {id: 4, name: 'Raf'},
                {id: 5, name: 'Splinter'},
                {id: 6, name: 'April'},
                {id: 7, name: 'Shreder'},
            ],
            messages: [
                {id: 1, message: 'Hi everyone'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'What am i doing here?'},
                {id: 4, message: 'Yok'},
                {id: 5, message: 'Hey'},
            ],
            newMessageBody: '',
            answers: [
                {id: 1, answer: 'Hey you'},
                {id: 2, answer: 'Go fuck yourself'},
                {id: 3, answer: 'I love you guys!'},
            ]
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hi everyone', likes: 13},
                {id: 2, message: 'Hi, my friends!', likes: 40},
                {id: 3, message: 'What am i doing here?', likes: 61},
                {id: 4, message: 'Oops', likes: 17},
                {id: 5, message: 'Hey', likes: 93},
            ],
            newPostText: 'Yo',
        },
        sidebar: {
            friends: [
                {id: 1, friend: 'Leo'},
                {id: 2, friend: 'Dony'},
                {id: 3, friend: 'Raf'},
                {id: 4, friend: 'April'},
            ]
        },
    },

    _callSubscriber/*rerenderEntireTree*/() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer; //observer// publisher-subscriber//
    },

    dispatch(action) {

        this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action);
        this._state.profilePage = profileReducer (this._state.profilePage, action);
        this._state.sidebar = sidebarReducer (this._state.sidebar, action);

        this._callSubscriber/*rerenderEntireTree*/(this._state);
    },

    /*updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._rerenderEntireTree(this._state);

    },

    addPost() {
        let newPost = {
            id: 6,
            message: this._state.profilePage.newPostText,
            likes: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._rerenderEntireTree(this._state);
        this._state.profilePage.newPostText = '';
    },

    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._rerenderEntireTree(this._state);
    },

    addMessage() {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._rerenderEntireTree(this._state);
    },*/
}

export default store;

window.store = store;//store OOP

/*
let rerenderEntireTree = () =>{
   console.log('state changed');
};

let state = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Leo'},
            {id: 2, name: 'Dony'},
            {id: 3, name: 'Miky'},
            {id: 4, name: 'Raf'},
            {id: 5, name: 'Splinter'},
            {id: 6, name: 'April'},
            {id: 7, name: 'Shreder'},
        ],
        messages: [
            {id: 1, message: 'Hi everyone'},
            {id: 2, message: 'Yo'},
            {id: 3, message: 'What am i doing here?'},
            {id: 4, message: 'Yok'},
            {id: 5, message: 'Hey'},
        ],
        newMessageText: 'cool',
        answers: [
            {id: 1, answer: 'Hey you'},
            {id: 2, answer: 'Go fuck yourself'},
            {id: 3, answer: 'I love you guys!'},
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi everyone', likes: 13},
            {id: 2, message: 'Hi, my friends!', likes: 40},
            {id: 3, message: 'What am i doing here?', likes: 61},
            {id: 4, message: 'Oops', likes: 17},
            {id: 5, message: 'Hey', likes: 93},
        ],
        newPostText: 'Yo',
    },
    sidebar: {
        friends: [
            {id: 1, friend: 'Leo'},
            {id: 2, friend: 'Dony'},
            {id: 3, friend: 'Raf'},
            {id: 4, friend: 'April'},
        ]
    },
}

window.state = state;

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);

}

export const addPost = () => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likes: 0,
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
    state.profilePage.newPostText = '';
};

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer; //observer// publisher-subscriber//
}



export default state;*/
