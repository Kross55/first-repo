import { authApi } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
    //isFetching: false,
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}


export const setAuthUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, payload: {id, login, email, isAuth} })

export const getAuthUserData = () =>{
    return (dispatch) => {
        return authApi.me().then( data => {
            if(data.resultCode === 0){
              let {id, login, email} = data.data;
              dispatch(setAuthUserData(id, login, email, true))
            }
          })
    }
}

export const login = (email, password, rememberMe, setStatus) =>{
    return (dispatch) => {
        authApi.login(email, password, rememberMe).then( data => {
            if(data.resultCode === 0){
              dispatch(getAuthUserData())
            } else {
              setStatus(data.messages)
            }
          })
    }
}

export const logout = () =>{
    return (dispatch) => {
        authApi.logout().then( data => {
            if(data.resultCode === 0){
              dispatch(setAuthUserData(null, null, null, false))
            }
          })
    }
}

export default authReducer;