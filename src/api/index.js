import Axios from 'axios';

const api = Axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000/app'
})

const registerUser = payload => api.post('/register', payload);
const loginUser = payload => api.post('/login', payload)
const checkAuthentication = () => api.get('/user')
const registerGif = payload => api.post('/gif',payload);
const registerMeme = payload => api.post('/meme', payload)
const registerPun = payload => api.post('/pun', payload)
const getAllGifs = () => api.get('/gifs')
const getAllPuns = () => api.get('/puns')
const getAllMemes = () => api.get('/memes')

const apis = {
    registerUser,
    loginUser,
    checkAuthentication,
    registerGif,
    registerMeme,
    registerPun,
    getAllGifs,
    getAllMemes,
    getAllPuns
}

export default apis