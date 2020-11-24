import Register from "../containers/pages/Register/Register";
import Login from "../containers/pages/Login/Login";
import Home from "../containers/pages/Home/Home";
import PartnerRegister from "../containers/pages/PartnerRegister/PartnerRegister";
import PartnerLogin from "../containers/pages/PartnerLogin/PartnerLogin";
import PartnerProfile from "../containers/pages/PartnerProfile/PartnerProfile";
import Reserve from "../containers/pages/Reserve/Reserve";


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
    path: "/",
    page: Home
  },
  partner_register: {
    path: "/partner_register",
    page: PartnerRegister
  },
  partner_login: {
    path: "/partner_login",
    page: PartnerLogin
  },
  partner_profile: {
    path: "/partner_profile",
    page: PartnerProfile
  },
  reserve: {
    path: "/reserve",
    page: Reserve
  },
};

const roles = {
  GUEST: [
    components.home,
    components.login,
    components.register,
    components.partner_register,
    components.partner_login,
  ],
  USER: [
    components.home,
    components.login,
    components.register,
    components.reserve,
  ],
  PARTNER: [
    components.home,
    components.partner_login,
    components.partner_register,
    components.partner_profile,
  ],
};

export default roles;