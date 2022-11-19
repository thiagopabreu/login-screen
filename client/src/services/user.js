import API from "./api";

const UserService = {
    register: async (params) => {
        const response = await API.post('/users/register', params)
    },
    login: async (params) => {
        const response = await API.post('/users/login', params)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        localStorage.setItem('token', response.data.token)
        return response
    }
}

export default UserService