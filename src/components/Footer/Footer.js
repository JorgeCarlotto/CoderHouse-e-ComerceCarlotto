import React from "react";


function Footer() {
  return (
<div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-muted">&copy; 2022 Betta Fishing Store, Inc</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <img
      src="https://res.cloudinary.com/ddi161cze/image/upload/v1643921508/Betta%20Fish%20Store/BETTA-LOGO_d3ymvz.jpg"
      width="50"
      height="50"
      className="d-inline-block align-top rounded-circle"
      alt=" Betta-logo"
    />
    </a>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Contacto</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Sobre Nosotros</a></li>
      
    </ul>
  </footer>
</div>

  );
}

export default Footer;
