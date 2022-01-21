import React from "react";
import './NavBar.css'
import CarWidget from "../IconComponents/CarWidget";
import UserIcon from "../IconComponents/UserIcon";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBar-Logo">
 

      <img src="BETTA-LOGO.jpg" alt="logo" />
      
      </div>

      <div className="NavBar-Inicio">
        <h2>Betta Fishing Store</h2>
        
      </div>

      <div className="NavBar-links">
        <div className="NavBar-links-categorias">
          <a href="/">Categoria 1</a>
          <a href="/">Categoria 2</a>
          <a href="/">Categoria 3</a>
        </div>
      </div>

      <div className="NavBar-shoppingcart">
      <CarWidget /> 
      </div>

      <div className="NavBar-Login">
        <a href="/">
          {" "}
          <button className="NavBar-btn"> <UserIcon/> Login </button>{" "}
        </a>
      </div>
    </div>
  );
}

export default NavBar;
