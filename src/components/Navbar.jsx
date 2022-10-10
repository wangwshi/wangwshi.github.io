import React from "react";
import { Nav } from './NavbarElements';

function Navbar() {
  return(
    <Nav.Wrapper>
      <Nav.Logo to="/">Hannah Wang</Nav.Logo>
      <Nav.Items>
        <Nav.Item to="/" end>About</Nav.Item>
        <Nav.Item to="/art">Art</Nav.Item>
        <Nav.Item to="/cv">Resume</Nav.Item>
        <Nav.Item to="/contact">Contact</Nav.Item>
      </Nav.Items>
    </Nav.Wrapper>
  );
}

export default Navbar;
