import styled from 'styled-components';

import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.div`
  padding: 0 2rem;
  background: #F8F8F8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0 2px 2px -2px gray;
`;

export const Title = styled.h1`
  font-family: sans-serif;
  color: black;
  font-size: 15px;

  &:hover {
    color: #585858;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
  }
`;

export const NavLink = styled(Link)`
  font-family: sans-serif;
  padding: 1rem 1rem;
  cursor: pointer;
  color: black;
  font-size: 13px;
  text-align: center;

  &:hover {
    color: #585858;
  }
`;
