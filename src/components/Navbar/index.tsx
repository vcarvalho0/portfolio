import React from 'react';

import {
  Nav, NavLink, NavMenu, Title,
} from './style';

const Navbar: React.FC = () => (
  <Nav>
    <NavLink to="/">
      <Title>Vitor Augusto</Title>
    </NavLink>
    <NavMenu>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/about">
        About
      </NavLink>
      <NavLink to="/contact">
        Contact
      </NavLink>
      <NavLink to="/projects">
        Projects
      </NavLink>
    </NavMenu>
  </Nav>
);

export default Navbar;
