import axios from "axios";
import store from "../store";
import { LOGOUT } from "../actions/types";

const api = axios.create({
  baseURL: "/api",
 // headers: {
 //   "Content-Type": "application/json",
 // },
});
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
**/

api.interceptors.request.use(
  async (config) => {
     const token = await localStorage.getItem('token')
     if (token) {
        // asign token to the headers 
        config.headers.Authorization = `Bearer ${token}`
     }
     return config
  },
  (err) => {
     return Promise.reject(err);
  }
)

export default api;
