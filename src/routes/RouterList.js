import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { Search } from "../pages/Search";
import { AllMovies } from "../pages/AllMovies";
import { AllNowPlaying } from "../pages/AllNowPlaying";
import { Register } from "../pages/Auth/Register";
import { Login } from "../pages/Auth/Login";

export const RouterList = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/all-popular" element={<AllMovies />}></Route>
          <Route path="/all-now-playing" element={<AllNowPlaying />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
