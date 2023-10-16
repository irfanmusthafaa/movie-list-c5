import { API_ENDPOINT } from "../../utils/api-endpoint";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";
import http from "../../utils/http";

import { useMutation } from "@tanstack/react-query";

const LoginUser = async (input) => {
  return await http
    .post(API_ENDPOINT.LOGIN_USER, input)
    .then((result) => {
      CookiesStorage.set(CookiesKey.AuthToken, result.data.data.token);
      // console.log(result);
    })
    .catch((err) => {
      // toast(err.response.data.message, "err");
      alert(err.response.data.message, "err");
    });
};

const useLoginUser = () => {
  return useMutation(LoginUser);
};

export { LoginUser, useLoginUser };
