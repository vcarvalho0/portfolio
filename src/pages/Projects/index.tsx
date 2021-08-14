import React from 'react';

import Card from '../../components/Cards';

import {
  CardContainer,
} from './style';

import dog from '../../assets/pictures/picture.png';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Projects: React.FC = () => (
  <>
    <Navbar />
    <CardContainer>
      <CardContainer>
        <Card name="discord-bot" text="Feito em Javascript" img={dog} link="vcarvalho0" />
        <Card name="portfolio" text="Confira o codigo deste projeto" img={dog} link="vcarvalho0" />
        <Card name="node-api" text="Confira o codigo deste projeto" img={dog} link="vcarvalho0" />
      </CardContainer>
    </CardContainer>
    <Footer />
  </>
);

export default Projects;
