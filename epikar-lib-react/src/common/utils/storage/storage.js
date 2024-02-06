const KEY_STORAGE = {
  TOKEN: 'token',
  REFRESH_TOKEN: 'refreshToken',
  LOGIN_USER: 'loginUser',
};

const getToken = () => {
  const token = sessionStorage.getItem(KEY_STORAGE.TOKEN);
  return token === 'undefined' || token === null ? null : token;
};
const getRefreshToken = () => {
  const token = sessionStorage.getItem(KEY_STORAGE.REFRESH_TOKEN);
  return token === 'undefined' || token === null ? null : token;
};
const getLoginUser = () => {
  const data = sessionStorage.getItem(KEY_STORAGE.LOGIN_USER);
  return data ? JSON.parse(data) : null;
};

const setToken = (token) => sessionStorage.setItem(KEY_STORAGE.TOKEN, token);
const setRefreshToken = (refreshToken) => sessionStorage.setItem(KEY_STORAGE.REFRESH_TOKEN, refreshToken);
const setLoginUser = (data) => sessionStorage.setItem(KEY_STORAGE.LOGIN_USER, JSON.stringify(data));

const removeToken = () => sessionStorage.removeItem(KEY_STORAGE.TOKEN);
const removeRefreshToken = () => sessionStorage.removeItem(KEY_STORAGE.REFRESH_TOKEN);
const removeLoginUser = () => sessionStorage.removeItem(KEY_STORAGE.LOGIN_USER);

const login = (token, refreshToken, loginUser) => {
  setToken(token);
  setRefreshToken(refreshToken);
  setLoginUser(loginUser);
};
const logout = () => {
  removeToken();
  removeRefreshToken();
  removeLoginUser();
};

export const session = Object.freeze({
  getToken,
  getRefreshToken,
  getLoginUser,

  setToken,
  setRefreshToken,
  setLoginUser,

  removeToken,
  removeRefreshToken,
  removeLoginUser,

  login,
  logout,
});
