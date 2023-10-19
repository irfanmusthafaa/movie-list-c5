import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { toast } from "react-toastify";
import { CookiesKey, CookiesStorage } from "../../utils/cookies";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import IconGoogle from "../../assets/icons/icons-google.svg";

function GoogleLogin({ buttonText }) {
  const registerLoginWithGoogleAction = async (accessToken) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_URL}/${API_ENDPOINT.GOOGLE_OAUTH}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      CookiesStorage.set(CookiesKey.AuthToken, token);
      window.location.href = "/home";
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) => registerLoginWithGoogleAction(responseGoogle.access_token),
  });

  return (
    <button
      color="white"
      className="w-full flex justify-center items-center rounded-full py-2 font-semibold bg-white text-black"
      onClick={() => loginWithGoogle()}
    >
      <img src={IconGoogle} width={25} /> {buttonText}
    </button>
  );
}

export default GoogleLogin;
