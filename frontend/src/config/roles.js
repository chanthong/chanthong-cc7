import Register from "../containers/pages/Register/Register";
import Login from "../containers/pages/Login/Login";
import Home from "../containers/pages/Home/Home";
import PartnerRegister from "../containers/pages/PartnerRegister/PartnerRegister";
import PartnerLogin from "../containers/pages/PartnerLogin/PartnerLogin";
import PartnerProfile from "../containers/pages/PartnerProfile/PartnerProfile";
import PartnerDashboard from "../containers/pages/PartnerDashboard/PartnerDashboard";
import Reserve from "../containers/pages/Reserve/Reserve";
import Profile from "../containers/pages/Profile/Profile";
import UserDashboard from "../containers/pages/UserDashboard/UserDashboard";
import ReserveConfirm from "../containers/pages/ReserveConfirm/ReserveConfirm1";


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
  partner_dashboard: {
    path: "/partner_dashboard",
    page: PartnerDashboard
  },
  user_dashboard: {
    path: "/user_dashboard",
    page: UserDashboard
  },
  reserve: {
    path: "/reserve/:id",
    page: Reserve
  },
  reserve_confirm: {
    path: "/reserve_confirm",
    page: ReserveConfirm
  },
  profile: {
    path: "/profile",
    page: Profile
  }
};

const roles = {
  GUEST: [
    components.home,
    components.login,
    components.register,
    components.partner_register,
    components.partner_login,
    components.reserve,
  ],
  USER: [
    components.home,
    components.login,
    components.register,
    components.reserve,
    components.profile,
    components.user_dashboard,
    components.reserve_confirm,
  ],
  PARTNER: [
    components.partner_login,
    components.partner_register,
    components.partner_profile,
    components.partner_dashboard,
  ],
};

export default roles;