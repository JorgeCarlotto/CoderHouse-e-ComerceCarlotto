import React from "react";
import { Navbar, NavDropdown, Nav, Container, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import CarWidget from "../IconComponents/CarWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/ddi161cze/image/upload/v1643921508/Betta%20Fish%20Store/BETTA-LOGO_d3ymvz.jpg"
              width="80"
              height="80"
              className="d-inline-block align-top rounded-circle"
              alt=" Betta-logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <h2>Betta Fishig Store</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Categorias de Productos"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>
                <Nav.Link>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "activeClass" : ""
                    }
                    to="category/cañas"
                  >
                    {" "}
                    Cañas
                  </NavLink>
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "activeClass" : ""
                    }
                    to="category/reeles"
                  >
                    {" "}
                    Reeles
                  </NavLink>
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "activeClass" : ""
                    }
                    to="category/indumentaria"
                  >
                    {" "}
                    Indumentaria
                  </NavLink>
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "activeClass" : ""
                    }
                    to="category/varios"
                  >
                    {" "}
                    Articulos varios
                  </NavLink>
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Nav.Link>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "activeClass" : ""
                    }
                    to="/"
                  >
                    Todos nuestros productos
                  </NavLink>
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            {/* componentes a implementar */}
            <Nav.Link>Sobre Nosotros</Nav.Link>
            <Nav.Link>Contacto</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link >
              <NavLink to="cart">
              <CarWidget />
              </NavLink>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              {" "}
              <Button variant="danger" size="lg">
                Login
              </Button>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

