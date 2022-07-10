import axios from "axios";

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`, 
  withCredentials: true,
  headers: {
    "api-key": "78c8030c-236d-46bf-b567-b990ea8878a7"
  } 
})

export const usersApi = {
  authMe () {
    return instance.get(`auth/me`)
      .then( response => {  //цепочка промисов, цепочка дзен
        return response.data;
      })
    },
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
    return instance.get(`profile/${userId}`)
      .then( response => {  
        return response.data;
      })
  }    
}

 