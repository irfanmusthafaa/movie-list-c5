import { API_ENDPOINT } from "../../utils/api-endpoint";
import { useMutation } from "@tanstack/react-query";
import http from "../../utils/http";

const RegisterUser = async (input) => {
  return await http.post(API_ENDPOINT.REGISTER_USER, input);
};

const useRegisterUser = () => {
  return useMutation(RegisterUser);
};

export { RegisterUser, useRegisterUser };
