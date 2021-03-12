import axios from "axios";

const API_URL = "http://54.93.196.62/auth/";

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    }, {withCredentials: true})
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