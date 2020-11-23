import Register from "../containers/pages/Register/Register";
import Login from "../containers/pages/Login/Login";
import Reserve from "../containers/pages/Reserve/Reserve";

const components = {  
  login: {
    path: "/",
    page: Login
  },
  register: {
    path: "/register",
    page: Register
  },
  reserve: {
    path: "/reserve",
    page: Reserve
  }  
};

const roles = {
  GUEST: [
    components.login,
    components.register
  ],
  USER: [
    components.login,
    components.register,
    components.reserve
  ],
  
}

export default roles;