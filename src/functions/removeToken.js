const removeToken = async (token) => {
  const myToken = await localStorage.removeItem("token", token);

  return myToken;
};
export default removeToken;
