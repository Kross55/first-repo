import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`, 
    withCredentials: true,
    headers: {
        "api-key": "eb78ec0e-3d5a-47bb-b02e-0db0d566867f"
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
          .then( response => {  //цепочка промисов, цепочка дзен
            return response.data;
          })
      },
    follow (userId) {
        return instance.post(`follow/${userId}`)
          .then( response => {  //цепочка промисов, цепочка дзен
            return response.data;
        })
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
          .then( response => {  //цепочка промисов, цепочка дзен
            return response.data;
        })
    },
}

 