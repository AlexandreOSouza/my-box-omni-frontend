import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-box-omni.herokuapp.com',
});

export default api;