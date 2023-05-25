import axios from 'axios';

// const Base_URL = "http://localhost:3000";
const Base_URL = "https://4987-119-160-96-219.ngrok-free.app";
// const Base_URL = "https://lms-app.pseudosquare.com"

const register = (user_data: Object): any => {
  // console.log(user_data);

  axios.post(`${Base_URL}/auth`, user_data)
    .then((response) => {
      console.log(response.data);
      // return response.data;
    })
    .catch((error: any) => console.log(error));
};

const login = (user_data: Object) => {
  axios
    .post(`${{ Base_URL }}/auth/sign_in`, { ...user_data, })
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
