const setToken = async (token) => {
  const myToken = await localStorage.setItem("token", token);

  return myToken;
};
export default setToken;
