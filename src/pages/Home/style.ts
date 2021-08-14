import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 80vh;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 15%;

  @media screen and (max-width: 768px) {
    width: 15%;
  }
`;

export const ButtonLink = styled(Link)`
  color: black;
  background: white;
  font-size: 20px;
  padding: 10px 30px;
  margin: 20px;
  border: 2px solid ${((props) => props.theme.colors.blue)};
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background: ${((props) => props.theme.colors.blue)};
    transition: 200ms ease-in;
    color: white;
  }
`;

export const Title = styled.h1`
  font-size: 45px;
  margin: 10px 0 10px 0;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Description = styled.p`
  font-size: 24px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
