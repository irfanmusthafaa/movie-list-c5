import { toast } from "react-toastify";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";

import http from "../../utils/http";

import { useMutation } from "@tanstack/react-query";

const LoginUser = async (input) => {
  return await http
    .post(API_ENDPOINT.LOGIN_USER, input)
    .then((result) => {
      CookiesStorage.set(CookiesKey.AuthToken, result.data.data.token);
      window.location.href = '/home'
    })
    .catch(() => {
      return toast.error("Login Gagal", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    });
};

const useLoginUser = () => {
  return useMutation(LoginUser);
};

export { LoginUser, useLoginUser };
