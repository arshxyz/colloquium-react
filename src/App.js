import React from "react";
import "./App.css";
import Header from "./Components/Header";
import { NavBar } from "./Components/Nav";
import { Route, Routes } from "react-router";
import { OurTeam } from "./Components/OurTeam/OurTeam";
import AboutUs from "./Components/AboutUs/AboutUsPage.jsx";
import { MUNDepartment } from "./Components/Departments/MUN";
import { PDDepartment } from "./Components/Departments/PD";
import Colloquium from "./Components/Colloquium";
import Home from "./Components/Home";

export const home = () => {
  return (
    <div className="App">
      <Header/>
    <NavBar/>
    <Home/>
  </div>
  )
}

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="ourteam" element={<OurTeam/>}/>
      <Route path ="about" element={<AboutUs/>} />
      <Route path ="pd" element={<PDDepartment/>} />
      <Route path ="mun" element={<MUNDepartment/>} />
      <Route path ="colloquium" element={<Colloquium/>} />
    </Routes>
  )
}
