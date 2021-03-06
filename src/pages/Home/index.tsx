import React from 'react';

import avatar from '../../assets/pictures/picture.png';

import Footer from '../../components/Footer';

import {
  Title,
  Description,
  Avatar,
  ButtonLink,
  HomeContainer,
} from './style';

const Home: React.FC = () => (
  <>
    <HomeContainer>
      <Avatar src={avatar} title="profile" alt="profile" />
      <Title>Hey, I am Vitor</Title>
      <Description>
        Welcome to my portfolio, here you can contact me and see my projects!
      </Description>
      <ButtonLink to="/contact">Contact Me</ButtonLink>
    </HomeContainer>
    <Footer />
  </>
);

export default Home;
