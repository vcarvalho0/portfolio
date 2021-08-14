import styled from 'styled-components';

import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.div`
  width: 100%;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  box-shadow: 0 2px 5px -5px ${(props) => props.theme.colors.gray};
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 20px;

  &:hover {
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const NavLink = styled(Link)`
  padding: 20px 15px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.gray};
  font-size: 18px;
  text-align: center;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    transition: 150ms ease-in;
  }
`;
