import Register from "../containers/pages/Register/Register";
import Login from "../containers/pages/Login/Login";
import PartnerRegister from "../containers/pages/PartnerRegister/PartnerRegister";
import PartnerLogin from "../containers/pages/PartnerLogin/PartnerLogin";

const components = {
  login: {
    path: "/",
    page: Login
  },
  register: {
    path: "/register",
    page: Register
  },
  partner_register: {
    path: "/partner_register",
    page: PartnerRegister
  },
  partner_login: {
    path: "/partner_login",
    page: PartnerLogin
  }
};

const roles = {
  GUEST: [
    components.login,
    components.register
  ],
  USER: [
    components.register
  ]
}

export default roles;