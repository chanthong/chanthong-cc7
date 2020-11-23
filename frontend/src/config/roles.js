import Register from "../containers/pages/Register/Register";
import Login from "../containers/pages/Login/Login";
import Reserve from "../containers/pages/Reserve/Reserve";
import Home from "../containers/pages/Home/Home";
import Profile from "../containers/pages/Profile/Profile";

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
  },
  home: {
    path: "/home",
    page: Home
  },
  profile: {
    path: "/profile",
    page: Profile
  }
};

const roles = {
  GUEST: [
    components.login,
    components.register,
    components.home
  ],
  USER: [
    components.login,
    components.register,
    components.reserve,
    components.home,
    components.profile
  ],
  
}

export default roles;