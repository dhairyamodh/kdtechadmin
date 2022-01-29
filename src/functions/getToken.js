const getToken = async (token) => {
  const myToken = await localStorage.getItem("token");

  return myToken;
};
export default getToken;
