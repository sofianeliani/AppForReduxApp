import axios from "axios";

const API_URL = "http://18.185.46.151/auth/";

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};


const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  }, headers)
};


const login = (username, password) => {
  return axios
    .post(API_URL + "signin", 
    {
      username,
      password,
    }, headers)
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