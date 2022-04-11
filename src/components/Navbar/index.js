import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>

          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
          <NavLink to="/College-List" activeStyle>
            College-List
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
