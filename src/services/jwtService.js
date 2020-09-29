import jwtDecode from "jwt-decode";

export function getCurrUser() {
  let jwt = localStorage.getItem("token");
  return jwtDecode(jwt);
}

export default {
  getCurrUser,
};
