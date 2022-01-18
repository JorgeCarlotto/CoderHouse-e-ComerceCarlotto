import React from "react";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBar-Logo">

      <img src="logo pez.jpg" alt="logo" />
      
      </div>

      <div className="NavBar-Inicio">
        {/* <a href="#">
          {" "}
          <button className="NavBar-btn">Inicio</button>{" "}
        </a> */}
        <h2>Fishing store</h2>
        
      </div>

      <div className="NavBar-links">
        <div className="NavBar-links-categorias">
          <a href="#">Categoria 1</a>
          <a href="#">Categoria 2</a>
          <a href="#">Categoria 3</a>
        </div>
      </div>

      <div className="NavBar-Login">
        <a href="#">
          {" "}
          <button className="NavBar-btn">Login</button>{" "}
        </a>
      </div>
    </div>
  );
}

export default NavBar;
