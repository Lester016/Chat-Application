import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://landian-react.firebaseio.com/'
});

export default instance;