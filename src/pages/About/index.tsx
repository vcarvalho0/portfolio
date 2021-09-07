import React from 'react';

import Footer from '../../components/Footer';

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
    <Container>
      <Title>About me</Title>
      <Description>
        <p>
          Olá, bem vindo ao meu portfólio, eu me chamo Vitor tenho 18 anos e
          atualmente sou um estudante, tenho tido contato com computadores e
          programação desde muito cedo, a maior motivação para isso foi tentar
          entender como jogos e softwares em geral funcionavam, desde então fui
          me aprofundando em conteúdos pela internet, tentado aprender o máximo possível.
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
      <p>Portuguese and English</p>
    </Container>
    <Footer />
  </>
);

export default About;
