import React, { useContext } from 'react';

import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';

import {
  Nav, NavLink, NavMenu, Title,
} from './style';

interface Props {
  toggleTheme(): void;
}

// eslint-disable-next-line react/prop-types
const Navbar: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Nav>
      <Title>Vitor Augusto</Title>
      <NavMenu>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offHandleColor={colors.secondary}
          offColor={colors.gray}
          onColor={colors.secondary}
        />
        <NavLink>
          <a href="/">Home</a>
        </NavLink>
        <NavLink>
          <a href="/about">About</a>
        </NavLink>
        <NavLink>
          <a href="/contact">Contact</a>
        </NavLink>
        <NavLink>
          <a href="/projects">Projects</a>
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
