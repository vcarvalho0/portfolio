import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import {
  Container,
  CssIcon,
  Description,
  HtmlIcon,
  Icons,
  JavascriptIcon,
  NodeIcon,
  ReactIcon,
  Title,
  TypescriptIcon,
} from './style';

const About: React.FC = () => (
  <>
    <Navbar />
    <Container>
      <Title>About me</Title>
      <Description>
        <p>Olá, me chamo Vitor tenho 18 anos</p>
        <p>atualmente estou cursando Análise e Desnvolvimento de Sistemas</p>
        <p>
          o intuito deste projeto é ser um simples portfolio para fins de estudo
        </p>
        <p>
          e também para possuir algumas informações sobre min e meus projetos.
        </p>
      </Description>
      <h2>Programming Languages and Frameworks</h2>
      <Icons>
        <NodeIcon title="Node" />
        <JavascriptIcon title="Javascript" />
        <TypescriptIcon title="Typescript" />
        <HtmlIcon title="Html" />
        <CssIcon title="CSS" />
        <ReactIcon title="React" />
      </Icons>
      <h2>Human Languages</h2>
      <p>Portugese and English</p>
    </Container>
    <Footer />
  </>
);

export default About;
