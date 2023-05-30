import axios from 'axios';
import { Base_URL } from '../config/app.config';

const register = (user_data: Object): any => {
  return axios
    .post(`${Base_URL}/auth`, user_data)
    .then((response) => { return response.data })
};

const login = (user_data: Object) => {
  return axios
    .post(`${ Base_URL }/auth/sign_in`, { ...user_data, })
    .then((response) => { return response.data; });
};

const isLoggedIn = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return true;
  } else {
    return false;
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

const AuthService = {
  register,
  login,
  isLoggedIn,
  logout
};

export default AuthService;
