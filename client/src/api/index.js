import axios from "axios";
//
const url = "http://localhost:5000/posts";
//const url = "https://memories-darpan466.herokuapp.com/posts";
//
export const getPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, postData) => axios.patch(`${url}/${id}`, postData);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);