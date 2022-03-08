import axios from 'axios'

const API = axios.create({baseURL: "http://localhost:5000/server"});

//Route

export const getAll = () => API.get("/allPosts/")
export const createPost = (writeData) => API.post("/post/others", writeData)
export const getAllPost = () => API.get("/post/others")
// export const getAllPost_others = () => API.get("/others/")
export const getPostById = (id) => API.get(`/post/${id}`)
export const updatePost = (id) => API.patch(`/post/${id}`)
export const likePost = (value, id) => API.patch(`/post/${id}/likePost`, {value})
export const deletePost = (id) => API.delete(`/post/${id}`)
export const comment = (value, id) => API.post(`/post/${id}/commentPost`, {value})

// Sports Route
export const createPost_sports = (writeData) => API.post("/sports/", writeData)
export const getAllPost_sports = () => API.get("/sports/")
export const getPostById_sports = (id) => API.get(`/sports/${id}`)
export const updatePost_sports = (id) => API.patch(`/sports/${id}`)
export const likePost_sports = (userId, postId) => API.patch(`/sports/likePost`, {userId, postId})
export const deletePost_sports = (id) => API.delete(`/sports/${id}`)
export const comment_sports = (value, id) => API.post(`/sports/${id}/commentPost`, {value})

// Entertainment Route
export const createPost_ent = (writeData) => API.post("/ent/", writeData)
export const getAllPost_ent = () => API.get("/ent/")
export const getPostById_ent = (id) => API.get(`/ent/${id}`)
export const updatePost_ent = (id) => API.patch(`/ent/${id}`)
export const likePost_ent = (value, id) => API.patch(`/ent/${id}/likePost`, {value})
export const deletePost_ent = (id) => API.delete(`/ent/${id}`)
export const comment_ent = (value, id) => API.post(`/ent/${id}/commentPost`, {value})

//Auth Route
export const register = (formData) => API.post("/auth/register", formData)
export const login = (loginData) => API.post("/auth/login", loginData)
export const getUserbyId = (id) => API.get(`/auth/${id}`)
export const updateUser = (id) => API.get(`/auth/${id}`)
export const getUsers = () => API.get('/auth/')
export const deleteUser = (id) => API.delete(`/auth/delete/${id}`)