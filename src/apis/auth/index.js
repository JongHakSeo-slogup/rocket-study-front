import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const requestAuthNumber = async (type, phoneNo, email) => {
  const body = {
    type,
    phoneNo,
    email,
  };
  try {
    const { data } = await axios.post(`/account/auth-nums`, body);
    return data;
  } catch (e) {
    console.log(Object.keys(e));
    if (e.response.data) {
      throw e.response.data;
    }
    throw e;
  }
};
