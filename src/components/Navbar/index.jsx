import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Container } from "./styled";

function Navbar() {
  return (
    <>
      <Container>
        <NavLink to="/controlled">Controlled</NavLink>
        <NavLink to="/first">First</NavLink>
        <NavLink to="/maps">Maps</NavLink>
        <NavLink to="/second">Second</NavLink>
        <NavLink to="/styledcom">StyledComponents</NavLink>
        <NavLink to="/uncontrolled">Uncontrolled</NavLink>
      </Container>
      <Outlet />
    </>
  );
}

export default Navbar;
