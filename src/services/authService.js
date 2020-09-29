import httpService from "./httpService";

export async function signIn(email, password) {
  var ans = false;

  const { data: jwt } = await httpService.signIn(email, password);
  if (jwt) {
    localStorage.setItem("token", jwt);
    ans = true;
  }

  return ans;
}

export async function signUp(firstName, email, password, phone) {
  var ans = false;

  try {
    const newUser = await httpService.signUp(firstName, email, password, phone);

    if (newUser.data) {
      localStorage.setItem("token", newUser.headers["x-auth-token"]);
      ans = true;
    }
  } finally {
    return ans;
  }
}

export default {
  signIn,
  signUp,
};
