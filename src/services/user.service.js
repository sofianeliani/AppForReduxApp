import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://54.93.196.62/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "content", { headers: authHeader() });
};

const getUserBoard = () => {
  return axios.get(API_URL + "usercontent", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admincontent", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getAdminBoard,
};