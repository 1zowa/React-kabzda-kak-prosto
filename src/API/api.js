import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '50feede4-6db3-441a-abd0-d23e094455b2',
    },
})

export const UsersAPI = {
    getUsers(page = 1, count = 8) {
        return instance.get(`users?page=${page}&count=${count}`)
            .then( response => response.data)
    },
    getProfile(userID) {
        return instance.get(`profile/${userID}`)
            .then( response => response.data)
    },
    checkFollowing(userID) {
       return instance.get(`follow/${userID}`)
           .then( response => response.data)
    },
    followingPost(userID) {
        return instance.post(`follow/${userID}`)
            .then( responce => responce.data)
    },
    follingDelete(userID) {
        return instance.delete(`follow/${userID}`)
            .then( responce => responce.data)
    }
}

export const authAPI = {
    getMyProfile() {
        return instance.get('auth/me')
            .then( response => response.data)
    },
    me() {
        return instance.get('auth/me')
    }
}