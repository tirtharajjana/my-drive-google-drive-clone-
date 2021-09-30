import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const getUserDetails = (id) => API.get(`/user/${id}/detail`);
// export const signUp = (formData) => {
//     API.post('/user/signup', formData).catch(error => {
//         console.log(error.response.data.message);
//         return error.response.data.message;
//     })
// };