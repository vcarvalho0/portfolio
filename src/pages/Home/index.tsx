import React from 'react';

import avatar from '../../assets/pictures/picture.png';

import {
  Container, Title, Description, AboutContainer, Button, Wrapper, Avatar,
} from './style';

const Home: React.FC = () => (
  <>
    <Container>
      <Avatar src={avatar} />
      <Title>Hey, I am Vitor</Title>
      <AboutContainer>
        <Description>
          Welcome to my portfolio, here you can contact me and see my projects!
        </Description>
      </AboutContainer>
    </Container>
    <Wrapper>
      <Button>Contact Me</Button>
    </Wrapper>
  </>
);

export default Home;
