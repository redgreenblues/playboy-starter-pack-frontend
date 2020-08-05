import Axios from 'axios';

const api = Axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000/app'
})

// User
const registerUser = payload => api.post('/register', payload);
const loginUser = payload => api.post('/login', payload);
const getUser = () => api.get('/user');
const logOut = () => api.get('/logout');

// Gif
const registerGif = payload => api.post('/gif', payload);
const getAllGifs = () => api.get('/gifs');
const getGifsByUser = username => api.get(`/gifs/${username}`);

// Meme
const registerMeme = payload => api.post('/meme', payload);
const getAllMemes = () => api.get('/memes');
const getMemesByUser = username => api.get(`/memes/${username}`);

// Pun
const registerPun = payload => api.post('/pun', payload);
const getAllPuns = () => api.get('/puns');
const getPunsByUser = username => api.get(`/puns/${username}`);


const apis = {
    registerUser,
    loginUser,
    getUser,
    logOut,
    registerGif,
    registerMeme,
    registerPun,
    getAllGifs,
    getAllMemes,
    getAllPuns,
    getGifsByUser,
    getMemesByUser,
    getPunsByUser
}

export default apis