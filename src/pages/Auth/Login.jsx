import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img/movie.jpg";
import {toast } from 'react-toastify';
import { useLoginUser } from "../../services/Auth/post-login";
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const { mutate: login, status, isSuccess, error} = useLoginUser();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  useEffect(() => {
    if(error) {
      toast(error.response.data.message)
    }

    if(isSuccess){
      window.location.href = "/home"
    }
  }, [status])
  
  

  const loginUser = () => {
    login({
      email: Email,
      password: Password
    });
  };
  
  return (
    <>
      <div
        className="flex items-center justify-center  min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img})`, backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        
      >
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className="w-1/4 border border-[rgba(255,255,255, .2)] backdrop-blur-xl shadow-xl text-white bg-transparent font-[Poppins] p-8 rounded-xl">
          <form action="">
            <h1 className="text-4xl  text-center font-bold">Login</h1>
            <div className="w-full my-8 mx-0 h-[50px] relative">
              <input
                onChange={handleInput}
                id="email"
                className="w-full h-full px-6 py-4 bg-transparent text-white text-md outline-none border-2 border-gray-200 rounded-[40px] placeholder:text-white"
                type="email"
                placeholder="Email"
                required
              />
              <i className="bx text-white bxs-user absolute right-5 top-3 text-xl"></i>
            </div>
            <div className="w-full my-8 mx-0 h-[50px] relative">
              <input
                onChange={handleInput}
                id="password"
                className="w-full h-full bg-transparent px-6 py-4 text-white text-md outline-none border-2 border-gray-200 rounded-[40px] placeholder:text-white"
                type="password"
                placeholder="Password"
                required
              />
              <i className="bx bxs-lock-alt text-white absolute right-5 top-3 text-xl"></i>
            </div>
            <button
              onClick={() => {
                loginUser()
              }}
              className="w-full rounded-full py-2 font-semibold bg-white text-black"
              type="submit"
            >
              Login
            </button>
            <div className="text-center mt-5">
              <p>
                Dont have an account?{" "}
                <Link className="text-blue-600 hover:underline font-bold text-md" to="/register">
                  Register Here
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
