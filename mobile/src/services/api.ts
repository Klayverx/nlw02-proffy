import axios from 'axios';

const api = axios.create({
    // ip da máquina na rede
    baseURL: 'http://192.168.0.119:3333',
});

export default api;