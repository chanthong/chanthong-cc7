const getToken = () => {
  return localStorage.getItem("ACCESS_TOKEN");
};

const getARole = () => {
  return localStorage.getItem("ACCESS_ROLE");
}

const setToken = (token) => {
  localStorage.setItem("ACCESS_TOKEN", token);
};

const setARole = (role) => {
  localStorage.setItem("ACCESS_ROLE", role);
};

const clearToken = () => {
  localStorage.clear();
};

const getRole = () => {
  const token = getToken()
  if (token) {
    const role = getARole()
    return role || "USER";
  };
  return "GUEST";
};

const allLocal = {
  getToken,
  setToken,
  clearToken,
  getRole,
  setARole
}

export default allLocal;