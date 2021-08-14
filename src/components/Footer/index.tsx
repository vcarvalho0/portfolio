import React from 'react';

import { Link } from 'react-router-dom';

import {
  Container, GitHubIcon, TwitterIcon, LinkedinIcon, DiscordIcon, SpotifyIcon, IconsContainer,
} from './style';

const Footer: React.FC = () => (
  <Container>
    <IconsContainer>
      <Link to={{ pathname: 'https://github.com/vcarvalho0' }} target="_blank" rel="nopener noreferrer">
        <GitHubIcon />
      </Link>
      <Link to={{ pathname: 'https://twitter.com/vcarvalho0_' }} target="_blank" rel="nopener noreferrer">
        <TwitterIcon />
      </Link>
      <Link to={{ pathname: 'https://www.linkedin.com/in/vitor-augusto-533948213/' }} target="_blank" rel="nopener noreferrer">
        <LinkedinIcon />
      </Link>
      <Link to={{ pathname: 'https://twitter.com/vcarvalho0_' }} target="_blank" rel="nopener noreferrer">
        <DiscordIcon />
      </Link>
      <Link to={{ pathname: 'https://twitter.com/vcarvalho0_' }} target="_blank" rel="nopener noreferrer">
        <SpotifyIcon />
      </Link>
      <p style={{ fontWeight: 'bold' }}>Made by Vitor</p>
      <p>&copy; 2021 All Rights Reserved.</p>
    </IconsContainer>
  </Container>
);

export default Footer;
