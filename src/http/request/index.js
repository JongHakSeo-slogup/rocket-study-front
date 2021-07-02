import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const request = async ({ method, url, body, qs }) => {
  try {
    const { data } = await axios[method](url, { ...body, query:qs });
    return data;
  } catch (e) {
    if (e.response.data) {
      throw e.response.data;
    }
    throw e;
  }
};

