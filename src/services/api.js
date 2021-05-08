import axios from 'axios';

const api = axios.create({
    baseURL: 'https://smart-wheater-api.herokuapp.com/api'
});

export default api;