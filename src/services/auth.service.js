import axios from "axios";

const API_URL = "http://18.185.46.151/auth/";

const options = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
};


const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  }, options)
};


const login = (username, password) => {

  return axios
    .post(API_URL + "signin", 
    {
      username,
      password,
    }, options)
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