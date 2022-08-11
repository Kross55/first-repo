import { authApi, securityApi } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
//3. action type
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null//3. if null captcha is not required
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    //оба экшина выполняют одинаковую логику, и мы её не дублируем
    case SET_USER_DATA:          
    case GET_CAPTCHA_URL_SUCCESS://3. action
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}

export const setAuthUserData = (id, login, email, isAuth) => ({ type: SET_USER_DATA, payload: { id, login, email, isAuth } })
//3. action creator
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } })

export const getAuthUserData = () => async (dispatch) => {
  let data = await authApi.me()
  if (data.resultCode === 0) {
    let { id, login, email } = data.data;
    dispatch(setAuthUserData(id, login, email, true))
  }
}

                                                  // 10. добавляем капчу в запрос на сервер(но не в виде url, а в виде строки)
export const login = (email, password, rememberMe, captcha, setStatus) => async (dispatch) => {
  let data = await authApi.login(email, password, rememberMe, captcha)
  if (data.resultCode === 0) {
    //в случае успешной логинизации
    dispatch(getAuthUserData())
  } else {
    //4. в случае многократной ошибки ввода данных для логинизации запрашиваем капчу в BLL 
    if(data.resultCode === 10){
      //диспатчим санку запроса капчи
      dispatch(getCaptchaUrl())
    }
    setStatus(data.messages)
  }
}
//TC                               //2. создаём санку запроса капчи
export const getCaptchaUrl = () => async (dispatch) => {
  const data = await securityApi.getCaptchaUrl()//достаём data
  const captchaUrl = data.url//из data достаём url каптчи
  //диспатчим экшн для сохранения капчи в нашем initialState
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch) => {
  let data = await authApi.logout()
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false, null))
  }
}

export default authReducer;