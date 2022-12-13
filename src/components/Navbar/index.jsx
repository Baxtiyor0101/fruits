import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./styled";

function Navbar() {
  return (
    <Container>
      <NavLink activeStyle={{ color: "coral" }} to="/controlled">
        Controlled
      </NavLink>
      <NavLink activeStyle={{ color: "coral" }} to="/first">
        First
      </NavLink>
      <NavLink activeStyle={{ color: "coral" }} to="/maps">
        Maps
      </NavLink>
      <NavLink activeStyle={{ color: "coral" }} to="/second">
        Second
      </NavLink>
      <NavLink activeStyle={{ color: "coral" }} to="/styledcom">
        StyledComponents
      </NavLink>
      <NavLink activeStyle={{ color: "coral" }} to="/uncontrolled">
        Uncontrolled
      </NavLink>
    </Container>
  );
}

export default Navbar;
