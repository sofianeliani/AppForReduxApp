import axios from "axios";

const API_URL = "http://18.185.46.151/auth/";

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

const instance = axios.create({
  withCredentials: 'include',
  baseURL: API_URL
})

const register = (username, email, password) => {
  return instance.post(API_URL + "signup", {
    username,
    email,
    password,
  })
};


const login = (username, password) => {

  return instance
    .post(API_URL + "signin", 
    {
      username,
      password,
    })
    .then(res => {
        if(res.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(res.data));
        }
        return res.data;
    });

};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout
};