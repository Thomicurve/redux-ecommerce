import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useCart from "../hooks/useCart";

const NavbarComponent = () => {
  const { cartAmount } = useCart();
  const navigate = useNavigate();

  const navigateTo = (url) => {
    navigate(url);
  }

  return (
    <Navbar bg="dark" className="sticky-top" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand style={{cursor: "pointer"}}  onClick={() => navigateTo('/')} >
          <b>OnHard</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <div className="d-flex">
            <button
              className="cart-button"
              style={{ outline: "none", background: "none", border: "none" }}
              onClick={() => navigateTo('/cart')}
            >
              <p className="cart-items-amount bg-primary">{cartAmount}</p>
              <FontAwesomeIcon
                icon={faCartShopping}
                className="text-light"
                size="lg"
              />
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
