import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterUser } from "../../services/Auth/post-register";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")
  const [Email, setEmail] = useState("")

  const { mutate: registerUser, data, status, isSuccess, error } = useRegisterUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast(error.response.data.message);
      console.log(error.response.data.message, "error loh")
    }
    if (isSuccess) {
      console.log("registration success")
      navigate("/login");
    }
  }, [status])
  

  const register = () => {
    registerUser({
      email: Email,
      name: Username,
      password: Password
    });
  };

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "username") {
        setUsername(e.target.value);
      }
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-500">
      <div className='flex flex-col justify-center items-center space-y-4 py-[4rem] px-[3rem] rounded-lg bg-gray-100 shadow-lg'>
        <div className="bg-red-500">
          Register
        </div>
        <ToastContainer />
        <div>
          <div>
            Username : <input onChange={handleInput} id='username' className="border-2" type='text' placeholder="Username"></input>
          </div>
          <div>
            Email : <input onChange={handleInput} id='email' className="border-2" type='text' placeholder="Email"></input>
          </div>
          <div>
            Password : <input onChange={handleInput} id='password' className="border-2" type='password' placeholder="Password"></input>
          </div>
        </div>
        <div>
          <button onClick={() => {register()}} className="border-2">Register</button>
        </div>
      </div>
    </div>
  ) 
};
