import React from "react";
import BuildYourWeb from "./components/BuildYourWeb";
import Home from "./components/Home";
import HomeImg from "./components/HomeImg";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen" style={{background: 'linear-gradient(180deg, #333333 0%, #090707 11.98%)',
      boxShadow : '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
    <Navbar/>
    <Home/>
    <HomeImg/>
    <BuildYourWeb/>
    </div>
  );
}

export default App;
