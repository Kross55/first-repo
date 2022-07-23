import { usersApi, profileApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialeState = {
    posts: [
        { id: 1, message: 'Hi everyone', likes: 13 },
        { id: 2, message: 'Hi, my friends!', likes: 40 },
        { id: 3, message: 'What am i doing here?', likes: 61 },
        { id: 4, message: 'Oops', likes: 17 },
        { id: 5, message: 'Hey', likes: 93 },
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialeState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 6,
                message: action.newPostBody,
                likes: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS:{
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
};

export const addPost = (newPostBody) => ({ type: ADD_POST, newPostBody });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersApi.getUserProfile(userId).then( data => {
            dispatch(setUserProfile(data))
          })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId).then(data => {
                dispatch(setStatus(data))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}

export default profileReducer;