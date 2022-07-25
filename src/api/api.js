import axios from "axios";

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`, 
  withCredentials: true,
  headers: {
    "api-key": "f637ab28-dba8-4923-9af9-1e97ec3d5d7f"
  } 
})

export const usersApi = {
  getUser (currentPage=1, pageSize=10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then( response => {  
        return response.data;
      })
    },
  follow (userId) {
    return instance.post(`follow/${userId}`)
      .then( response => {  
        return response.data;
    })
  },
  unfollow (userId) {
    return instance.delete(`follow/${userId}`)
      .then( response => {  
        return response.data;
    })
  },
  getUserProfile (userId) {
    console.warn('Obsolete method. Please profileApi object.')
      return profileApi.getUserProfile(userId)
  }    
}

export const profileApi = {
  getUserProfile (userId) {
    return instance.get(`profile/${userId}`)
      .then( response => {  
        return response.data;
      })
  },
  getStatus (userId) {
    return instance.get(`profile/status/${userId}`)
      .then( response => {  
        return response.data;
      })
  },
  updateStatus (status) {
    return instance.put(`profile/status`, {status: status})//смотри документацию сервера(в put запрос вставляется объект после URL)
      .then( response => {  
        return response.data;
      })
  },    
}


export const authApi = {
  me () {
    return instance.get(`auth/me`)
      .then( response => {
        return response.data;
      })
  },
  login (email, password, rememberMe=false) {
    return instance.post(`auth/login`, {email, password, rememberMe})
      .then( response => {
        return response.data;
      })
  },
  logout () {
    return instance.delete(`auth/login`)
      .then( response => {
        return response.data;
      })
  },
}

 