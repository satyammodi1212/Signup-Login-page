import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const signup = (formData) => API.post('/auth/signup', formData);
export const signin = (formData) => API.post('/auth/signin', formData);
