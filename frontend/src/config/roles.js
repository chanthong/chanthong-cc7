import Register from "../containers/pages/Register/Register";
import Login from "../containers/pages/Login/Login";
import Home from "../containers/pages/Home/Home";

const components = {  
  login: {
    path: "/login",
    page: Login
  },
  register: {
    path: "/register",
    page: Register
  },
  home: {
    path:"/",
    page: Home
  }  
};

const roles = {
  GUEST: [
    components.home,
    components.login,
    components.register
  ],
  USER: [
    components.home
    
  ]
  
}

export default roles;