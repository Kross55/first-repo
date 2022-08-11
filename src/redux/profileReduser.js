import { profileApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SET_PROFILE = 'SET_PROFILE';
const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS';

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
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SAVE_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.profile
            };             
        default:
            return state;
    }
};

export const addPost = (newPostBody) => ({ type: ADD_POST, newPostBody });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
//АС который диспатчим после получения ответа от сервера
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getUserProfile = (userId) => async (dispatch) => {
    let data = await profileApi.getUserProfile(userId)
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

                                   //санка для передачи картинки/фото на сервер
export const savePhoto = (file) => async (dispatch) => {
    //запрос в api
    let data = await profileApi.savePhoto(file)         
    if (data.resultCode === 0) {
        //помещаем картинку/фото в state
        dispatch(savePhotoSuccess(data.data.photos))    
    }
}
                                                   //санка изменения профиля на сервере
export const saveProfile = (profile) => async (dispatch, getState) => {
    //достаём наш id из нашего store
    const userId = getState().auth.id
    //запрос в api (DAL) для изменения профиля на сервере
    const data = await profileApi.saveProfile(profile)        
    if (data.resultCode === 0) {
       //в случае положительного ответа сервера - resultCode === 0,
       // запрашиваем обновлённый профиль из сервера в наш initialeState
       dispatch(getUserProfile(userId))
    //в случае отрицательного ответа сервера - resultCode !== 0,
    //выводим ощибку внутри Formik    
    } else {
       setStatus(data.messages)
    }
}

export default profileReducer;