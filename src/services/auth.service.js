import axios from "axios";

const API_URL = "http://18.185.46.151/auth/";

const options = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
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
      return fetch('http://18.185.46.151:3000/api/auth/signin', 
      {
        username,
        password,
      },
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(userCredentials)
        })
        .then(res => {
          if(res.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(res.data));
          }
          return res.data;
        });
      }

  // return axios
  //   .post(API_URL + "signin", 
  //   {
  //     username,
  //     password,
  //   }, options)
  //   .then(res => {
  //       if(res.data.accessToken) {
  //           localStorage.setItem("user", JSON.stringify(res.data));
  //       }
  //       return res.data;
  //   });

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout
};