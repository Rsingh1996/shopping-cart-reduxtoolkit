import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const cartProducts = useSelector((state) => state.cart);
  const productLength = cartProducts.length;
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container fluid style={{ backgroundColor: "#E0FFFF" }}>
        <Navbar.Brand href="#">Shopping Cart</Navbar.Brand>
        <Nav>
          <Nav.Link to="/" as={Link} style={{ fontWeight: 500, color: "gray" }}>
            Products
          </Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Nav.Link
              to="/cart"
              as={Link}
              style={{ fontWeight: 500, color: "gray" }}
            >
              MyBag {productLength}
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
