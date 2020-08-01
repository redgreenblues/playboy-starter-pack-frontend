import Axios from 'axios';

const api = Axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000/app'
})

const registerUser = payload => api.post('/register', payload);
const loginUser = payload => api.post('/login', payload)
const checkAuthentication = () => api.get('/user')

const apis = {
    registerUser,
    loginUser,
    checkAuthentication
}

export default apis