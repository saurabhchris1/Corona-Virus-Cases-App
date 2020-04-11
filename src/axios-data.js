import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://corona-api.com/'
});

export default instance;