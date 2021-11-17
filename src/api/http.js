import axios from 'axios'
// import {resetUser} from 'store/user'

const baseURL = `${process.env.REACT_APP_API_PROTOCOL}//${process.env.REACT_APP_API_HOSTNAME}`,
  baseTimeout = 10000,
  baseProxy = '/api';

const instance = axios.create({
  baseURL,
  baseTimeout,
  baseProxy
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
});

// instance.interceptors.response.use(response => response, err => {
//   if (err.response.status === 401) {
//     const store = require('store').default
//     store.dispatch(resetUser())
//     return Promise.reject(err)
//   }
//   return Promise.reject(err)
// });

export default instance;
