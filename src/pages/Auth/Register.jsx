import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUser } from "../../services/Auth/post-register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "../../assets/img/movie.jpg";

export const Register = () => {
  // const [Username, setUsername] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPass, setConfirmPass] = useState("");
  const [Email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);

  const { mutate: registerUser, data, status, isSuccess, error } = useRegisterUser();

  const navigate = useNavigate();

  const clickPass = () => {
    setShowPassword(!showPassword);
  };

  const clickPassConfirm = () => {
    setShowPassConfirm(!showPassConfirm);
  };

  useEffect(() => {
    if (error) {
      toast(error.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    if (isSuccess) {
      navigate("/");
    }
  }, [status]);

  const register = () => {
    if (ConfirmPass === Password) {
      const Username = `${FirstName}` + `${LastName}`;
      registerUser({
        email: Email,
        name: Username,
        password: Password,
      });
    } else {
      toast("Your password confirmation doesn't match", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "firstName") {
        setFirstName(e.target.value + " ");
      }
      if (e.target.id === "lastName") {
        setLastName(e.target.value);
      }
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
      if (e.target.id === "confirmPass") {
        setConfirmPass(e.target.value);
      }
    }
  };

  return (
    <div>
      <div
        className="flex items-center justify-center  min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img})`, backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="lg:w-1/4 md:w-1/2 border border-[rgba(255,255,255, .2)] backdrop-blur-xl shadow-xl text-white bg-transparent font-[Poppins] p-8 rounded-xl">
          <h1 className="text-4xl text-center font-bold">Register</h1>
          <div className="w-full my-4 mx-0 h-[50px] relative">
            <input
              onChange={handleInput}
              id="firstName"
              className="w-full h-full bg-transparent px-6 py-4 text-white text-md outline-none border-2 border-gray-200 rounded-[40px] placeholder:text-white"
              type="text"
              placeholder="First Name"
            />
            <i className="bx text-white bxs-user absolute right-5 top-3 text-xl"></i>
          </div>
          <div className="w-full my-4 mx-0 h-[50px] relative">
            <input
              onChange={handleInput}
              id="lastName"
              className="w-full h-full bg-transparent px-6 py-4 text-white text-md outline-none border-2 border-gray-200 rounded-[40px] placeholder:text-white"
              type="text"
              placeholder="Last Name"
            />
            <i className="bx text-white bxs-user absolute right-5 top-3 text-xl"></i>
          </div>
          <div className="w-full my-4 mx-0 h-[50px] relative">
            <input
              onChange={handleInput}
              id="email"
              className="w-full h-full px-6 py-4 bg-transparent text-white text-md outline-none border-2 border-gray-200 rounded-[40px] placeholder:text-white"
              type="email"
              placeholder="Email"
            />
            <i className="bx text-white bxs-envelope absolute right-5 top-3 text-xl"></i>
          </div>
          <div className="w-full my-4 mx-0 h-[50px] relative">
            <input
              onChange={handleInput}
              id="password"
              className="w-full h-full bg-transparent px-6 py-4 text-white text-md outline-none border-2 border-gray-200 rounded-[40px] placeholder:text-white"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <button onClick={clickPass}>
              {showPassword ? (
                <i className="bx bxs-hide text-white absolute right-5 top-3 text-xl"></i>
              ) : (
                <i className="bx bxs-show text-white absolute right-5 top-3 text-xl"></i>
              )}
            </button>
          </div>
          <div className="w-full my-4 mx-0 h-[50px] relative">
            <input
              onChange={handleInput}
              id="confirmPass"
              className="w-full h-full bg-transparent px-6 py-4 text-white text-md outline-none border-2 border-gray-200 rounded-[40px] placeholder:text-white"
              type={showPassConfirm ? "text" : "password"}
              placeholder="Password Confirmation"
            />
            <button onClick={clickPassConfirm}>
              {showPassConfirm ? (
                <i className="bx bxs-hide text-white absolute right-5 top-3 text-xl"></i>
              ) : (
                <i className="bx bxs-show text-white absolute right-5 top-3 text-xl"></i>
              )}
            </button>
          </div>
          <button
            onClick={() => {
              register();
            }}
            className="w-full rounded-full py-2 font-semibold bg-white text-black hover:opacity-80"
          >
            Register
          </button>
          <div className="text-center mt-5">
            <p>
              Already have an account?{" "}
              <Link className="text-blue-600 hover:underline font-bold text-md" to="/">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
