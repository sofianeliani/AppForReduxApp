import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "content");
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