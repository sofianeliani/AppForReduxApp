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

  /*return axios
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
    });*/

    return fetch('http://18.185.46.151:3000/api/auth/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      return data
    })
    .catch(err => console.log(err))
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout
};