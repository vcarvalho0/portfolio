import React from 'react';

import { Link } from 'react-router-dom';

import {
  Cards, CardText, Icon,
} from './style';

interface CardProps {
  name: string;
  img: string;
  link: string;
}

const Card: React.FC<CardProps> = ({
  // eslint-disable-next-line react/prop-types
  name, link,
}) => (
  <Cards>
    <CardText>
      <h2>{name}</h2>
    </CardText>
    <Link to={{ pathname: `https://github.com/vcarvalho0/${link}` }} target="_blank" rel="nopener noreferrer">
      <Icon />
    </Link>
  </Cards>
);

export default Card;
