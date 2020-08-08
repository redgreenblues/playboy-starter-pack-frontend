import Axios from 'axios';

const api = Axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/app',
    // baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000/app',
})

// User
const registerUser = payload => api.post('/register', payload);
const loginUser = payload => api.post('/login', payload);
const getUser = () => api.get('/user');
const logOut = () => api.get('/logout');
const updateUser = payload => {
    console.log('updating with...', payload)
    api.put(`/update/${payload.userId}`, payload);
}

// Gif
const registerGif = payload => api.post('/gif', payload);
const getAllGifs = () => api.get('/gifs');
const getGifsByUser = username => api.get(`/gifs/${username}`);
const getOneGif = contentId => api.get(`/gif/${contentId}`);

// Meme
const registerMeme = payload => api.post('/meme', payload);
const getAllMemes = () => api.get('/memes');
const getMemesByUser = username => api.get(`/memes/${username}`);

// Pun
const registerPun = payload => api.post('/pun', payload);
const getAllPuns = () => api.get('/puns');
const getPunsByUser = username => api.get(`/puns/${username}`);

const postGifComment = payload => {api.post(`/gif/${payload.contentId}/comment`, payload)}

const apis = {
    registerUser,
    loginUser,
    getUser,
    logOut,
    updateUser,
    registerGif,
    registerMeme,
    registerPun,
    getAllGifs,
    getAllMemes,
    getAllPuns,
    getGifsByUser,
    getMemesByUser,
    getPunsByUser,
    getOneGif,
    postGifComment
}

export default apis