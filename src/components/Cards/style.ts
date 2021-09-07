import styled from 'styled-components';

import {
  SiGithub,
} from 'react-icons/si';

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px;
  grid-template-areas: 'image' 'text';
  box-shadow: 0 2px 10px gray;
  transition: transform 200ms ease-in;

  margin: 40px 40px;

  background: ${((props) => props.theme.colors.primary)};
  text-align: center;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CardImage = styled.div`
  grid-area: image;

  > img {
    width: 280px;
    height: 210px;
  }
`;

export const CardText = styled.div`
  grid-area: text;
  margin: 2px;

  > p {
    color: ${(props) => props.theme.colors.text};
    font-size: 20px;
    font-weight: 300;
    margin-top: 15px;
  }

  > h2 {
    margin-top: 0px;
    font-size: 28px;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const Icon = styled(SiGithub)`
  width: 40px;
  height: 40px;
  margin: 10px;
  color: ${(props) => props.theme.colors.secondary};

  &:hover {
    color: gray;
  }
`;
