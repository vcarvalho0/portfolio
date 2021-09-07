import React from 'react';

import Card from '../../components/Cards';

import {
  CardContainer,
} from './style';

import dog from '../../assets/pictures/picture.png';

import Footer from '../../components/Footer';

const Projects: React.FC = () => (
  <>
    <CardContainer>
      <CardContainer>
        <Card name="discord-bot" img={dog} link="vcarvalho0" />
        <Card name="portfolio" img={dog} link="vcarvalho0" />
        <Card name="node-api" img={dog} link="vcarvalho0" />
      </CardContainer>
    </CardContainer>
    <Footer />
  </>
);

export default Projects;
