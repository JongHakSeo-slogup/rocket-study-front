import axios from "axios";
import { dataLog } from "../../store";
// axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const request = async ({ method, url, body, qs }) => {
  try {
    dataLog.update((prev) => {
      return prev.concat({
        type: "request",
        method,
        url,
        body,
        qs,
      });
    });
    const { data } = await axios[method](url, { ...body, query: qs });
    dataLog.update((prev) => {
      return prev.concat({
        type: "response",
        data,
      });
    });
    return data;
  } catch (e) {
    if (e.response && e.response.data) {
      dataLog.update((prev) => {
        return prev.concat({
          type: "error",
          error: e.response.data,
        });
      });
      throw e.response.data;
    }
    e.msg = "row error";
    dataLog.update((prev) => {
      return prev.concat({
        type: "error",
        error: "row error",
      });
    });
    throw e;
  }
};
