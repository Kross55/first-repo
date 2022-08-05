import { usersApi, profileApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
        case ADD_POST:
            let newPost = {
                id: 6,
                message: action.newPostBody,
                likes: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case DELETE_POST:
            return {
                ...state,
                posts: [...state.posts.filter(p => p.id !== action.postId)],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}//делаем копию профиля и добавляем в него нашу картинку/фото
            };   
        default:
            return state;
    }
};

export const addPost = (newPostBody) => ({ type: ADD_POST, newPostBody });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });//АС который диспатчим после получения ответа от сервера

export const getUserProfile = (userId) => async (dispatch) => {
    let data = await usersApi.getUserProfile(userId)
    dispatch(setUserProfile(data))
}

export const getStatus = (userId) => async (dispatch) => {
    let data = await profileApi.getStatus(userId)
    dispatch(setStatus(data))
}

export const updateStatus = (status) => async (dispatch) => {
    let data = await profileApi.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {//санка для передачи картинки/фото на сервер
    let data = await profileApi.savePhoto(file)         //запрос в api
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))    //помещаем картинку/фото в state
    }
}

export default profileReducer;