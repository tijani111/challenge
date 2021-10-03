import React from 'react';
import './App.css';
import Navbar from "./nav.js";
function App() {
  return (
    <div className="App">
      <div className="nav"style={{display: "block"}}> <Navbar className="nav"style={{width:"500px"}}/></div>
    
   
    <img src="/description.jpg" alt="img"className="img1" ></img>
    <img src="/title.png" alt="img"className="img2" ></img>
    <img src="/projects.jpg" alt="img" className="img3" ></img>
    </div>
  );
}

export default App;
