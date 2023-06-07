import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
