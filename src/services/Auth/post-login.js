import { API_ENDPOINT } from "../../utils/api-endpoint";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";

import http from "../../utils/http";

import { useMutation } from "@tanstack/react-query";

const LoginUser = async (input) => {
  return await http
    .post(API_ENDPOINT.LOGIN_USER, input)
    .then((result) => {
      CookiesStorage.set(CookiesKey.AuthToken, result.data.data.token);
    })

};

const useLoginUser = () => {
  return useMutation(LoginUser);
};

export { LoginUser, useLoginUser };
