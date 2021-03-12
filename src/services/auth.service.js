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
  const userCredentials = {
    username: username,
    password: password
  }
  fetch('http://54.93.196.62:3000/api/auth/signin', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(userCredentials)
    })
    .then(response => response.json())
    .then(data => localStorage.setItem('user', JSON.stringify(data)))
    .catch(err => {
      console.log(err)
    })
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout
};