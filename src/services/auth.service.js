import axios from "axios";

const API_URL = "http://18.185.46.151/auth/";

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Origin': '*'
};


const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  }, headers)
};

const login2 = (username, password) => {

}

const login = (username, password) => {

  return fetch(API_URL + 'signin', {
    method: 'POST',
    headers: headers,
    body: {
      username: username,
      password: password
    }
  })
  .then(response => {
    response.json();
  })
  .then(data => {
    if(data.accessToken){
      localStorage.setItem("user", JSON.stringify(data.accessToken));
    }
  })
  .catch(err => {
    console.log(err)
  })
  // return axios
  //   .post(API_URL + "signin", 
  //   {
  //     username,
  //     password,
  //   }, headers)
  //   .then(res => {
  //       if(res.data.accessToken) {
  //           localStorage.setItem("user", JSON.stringify(res.data));
  //       }
  //       return res.data;
  //   });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout
};