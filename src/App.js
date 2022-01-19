import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { NavBar } from "./Components/Nav";
import { Route, Routes } from "react-router";
import { OurTeam } from "./Components/OurTeam/OurTeam";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="App">
      <Header/>
      
    <NavBar/>
  </div>
  )
}

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="ourteam" element={<OurTeam/>}/>
    </Routes>
  )
}
