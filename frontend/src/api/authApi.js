import axios from 'axios';
const BASE = process.env.REACT_APP_API_URL;

export function signup(data){
    return axios.post(`${BASE}/auth/signup`,data);
}

export function login(data){
    return axios.post(`${BASE}/auth/login`,data);
}

