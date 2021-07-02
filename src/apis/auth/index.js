import { request } from "../../http/request";

export const requestAuthNumber = async (type, phoneNo, email) => {
  const body = {
    type,
    phoneNo,
    email,
  };

  return request({method:'post', url:`/account/auth-nums`, body});
};

export const requestAuthNumberToken = async (type, phoneNo, email, authNum) => {
  const body = {
    type,
    phoneNo,
    email,
    authNum
  };

  return request({method:'post', url:`/account/auth-num-tokens`, body});
};
