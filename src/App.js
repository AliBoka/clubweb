import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen" style={{background: 'linear-gradient(180deg, #333333 0%, #090707 11.98%)',
      boxShadow : '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
    <Navbar/>
    <Home/>
    </div>
  );
}

export default App;
