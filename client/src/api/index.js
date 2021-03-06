import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    const user = JSON.parse(localStorage.getItem("profile"));
    if (user) {
        req.headers.userId = user.result._id;
    }
    return req;
})


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const getUserDetails = (id) => API.get(`/user/${id}/detail`);
export const uploadLogo = (formData) => API.post('/user/upload/logo', formData);
export const createFile = (formData, FileOptions) => API.post('/api/create/file', formData, FileOptions);
export const createFolder = ({ name, parentId, userId, path }) => API.post('/api/create/folder', { name, parentId, userId, path });
export const getFolders = (parentId) => API.get(`/api/folder/detail/${parentId}`);
export const getFiles = (parentId) => API.get(`/api/file/detail/${parentId}`);
export const getCurrentFolder = (currentFolderId) => API.get(`/api/currentFolder/detail/${currentFolderId}`);
