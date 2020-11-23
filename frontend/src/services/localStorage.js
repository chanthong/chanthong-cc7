import jwt_decode from 'jwt-decode';

var token = "eyJ0eXAiO.../// jwt token";
var decoded = jwt_decode(token);

console.log(decoded);

const getToken = () => {
  return localStorage.getItem("ACCESS_TOKEN");
};

const setToken = (token) => {
  localStorage.setItem("ACCESS_TOKEN", token);
};

const clearToken = () => {
  localStorage.clear();
};

const getRole = () => {
  if (getToken()) {
    return "USER";
  }
  return "GUEST";
};

export default {
  getToken,
  setToken,
  clearToken,
  getRole,
};