import axios from 'axios';

const BASE = process.env.REACT_APP_API_URL;

export function fetchPosts(){
    return axios.get(`${BASE}/posts`);
}

export function fetchPost(id){
    return axios.get(`${BASE}/posts/${id}`);
}

export function createPost(data) {
    return axios.post(`${BASE}/posts`,data);
}

export function createComment(postId, data){
    return axios.post(`${BASE}/posts/${postId}/comments`, data);
}



