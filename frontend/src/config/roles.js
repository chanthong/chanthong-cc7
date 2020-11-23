import Register from "../containers/pages/Register/Register";
import Login from "../containers/pages/Login/Login";

const components = {  
  login: {
    path: "/",
    page: Login
  },
  register: {
    path: "/register",
    page: Register
  }  
};

const roles = {
  GUEST: [
    components.login,
    components.register
  ]
  
}

export default roles;