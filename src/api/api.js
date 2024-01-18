import axios from 'axios'

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    baseURL: baseURL,
    headers: {
    'api-key' : 'dd008388-c9a9-4592-b969-32790b1741ca'
    }
})

export const usersAPI = {
     getUsers(currentPage, pageSize) {
       return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => { return response.data })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(responce => { return responce.data })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(responce => { return responce.data })
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => { return response.data })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(responce => { return responce.data })
    },
    updateStatus(status) {
        return instance.put('profile/status', { status: status }).then(responce => { return responce.data });
    }
}

export const authAPI = {
    me()  {
        return instance.get('auth/me').then(responce => {return responce.data})
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe}).then(responce => {return responce.data})
    },
    logout() {
        return instance.delete('auth/login').then(responce => {return responce.data})
    }
}
