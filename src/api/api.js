import axios from "axios";

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`, //просто обновил ключ, можго было этого не делать!
  withCredentials: true,
  headers: {
    "api-key": "cb12c286-7040-4165-be75-e6f2afe85300"
  } 
})

export const usersApi = {
  async getUser(currentPage = 1, pageSize = 10) {
    let response = await instance.get(`users?page=${currentPage}&count=${pageSize}`)
    return response.data
  },
  async follow (userId) {
    let response = await instance.post(`follow/${userId}`) 
        return response.data
  },
  async unfollow (userId) {
    let response = await instance.delete(`follow/${userId}`) 
        return response.data
  },
  getUserProfile (userId) {
    console.warn('Obsolete method. Please profileApi object.')
      return profileApi.getUserProfile(userId)
  }    
}

export const profileApi = {
  async getUserProfile(userId) {
    let response = await instance.get(`profile/${userId}`);
    return response.data;
  },
  async getStatus(userId) {
    let response = await instance.get(`profile/status/${userId}`);
    return response.data;
  },
  async updateStatus(status) {
    let response = await instance.put(`profile/status`, { status: status });
    return response.data;
  },
  async savePhoto(photoFile) {
    const formData = new FormData();             //часть кода необходимый для зарузки файлов
    formData.append("image", photoFile);         //"image" взято из документации сервера, так называется объект фото Properties -image: required(file)
    let response = await instance.put(`profile/photo`, formData); //передаём фото на сервер в качестве второго параметра(как обычно для put)
    return response.data;
  },
};


export const authApi = {
  async me () {
    let response = await instance.get(`auth/me`)
        return response.data
  },
  async login (email, password, rememberMe=false) {
    let response = await instance.post(`auth/login`, {email, password, rememberMe})
        return response.data
  },
  async logout () {
    let response = await instance.delete(`auth/login`)
        return response.data
  },
}

 