import Axios from 'axios';

const api = Axios.create({
    withCredentials: true,
    // baseURL: 'http://localhost:3000/app',
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000/app',
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
const updateGif = (id, payload) => api.put(`/gif/${id}`, payload);
const getOneGif = id => api.get(`/gif/${id}`);


// Meme
const registerMeme = payload => api.post('/meme', payload);
const getAllMemes = () => api.get('/memes');
const getMemesByUser = username => api.get(`/memes/${username}`);
const updateMeme = (id, payload) => api.put(`/meme/${id}`, payload);
const getOneMeme = id => api.get(`/meme/${id}`);


// Pun
const registerPun = payload => api.post('/pun', payload);
const getAllPuns = () => api.get('/puns');
const getPunsByUser = username => api.get(`/puns/${username}`);
const updatePun = (id, payload) => api.put(`/pun/${id}`, payload);

//General
const postComment = payload => api.post(`/${payload.id}/comment`, payload)
const getOneContent = id => api.get(`/content/${id}`);


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
    getOneMeme,
    updateMeme,
    updateGif,
    updatePun,
    postComment,
    getOneContent
}

export default apis