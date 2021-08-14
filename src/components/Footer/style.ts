import styled from 'styled-components';

import {
  SiGithub, SiTwitter, SiLinkedin, SiDiscord, SiSpotify,
} from 'react-icons/si';

export const Container = styled.div`
  width: 100%;
  display: flex;
  background: white;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #fff;
  box-shadow: 0 -4px 3px -5px gray;
`;

export const IconsContainer = styled.div`
  flex-direction: row;
  text-align: center;
`;

export const GitHubIcon = styled(SiGithub)`
  height: 40px;
  width: 40px;
  margin: 15px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.secondary};

  &:hover {
    color: gray;
    transition: 150ms ease-in;
  }
`;

export const TwitterIcon = styled(SiTwitter)`
  height: 40px;
  width: 40px;
  margin: 15px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.secondary};;

  &:hover {
    color: #1DA1F2;
    transition: 150ms ease-in;
  }
`;

export const LinkedinIcon = styled(SiLinkedin)`
  height: 40px;
  width: 40px;
  margin: 15px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.secondary};;

  &:hover {
    color: #0e76a8;
    transition: 150ms ease-in;
  }
`;

export const DiscordIcon = styled(SiDiscord)`
  height: 40px;
  width: 40px;
  margin: 15px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.secondary};;

  &:hover {
    color: #7289DA;
    transition: 150ms ease-in;
  }
`;

export const SpotifyIcon = styled(SiSpotify)`
  height: 40px;
  width: 40px;
  margin: 15px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.secondary};;

  &:hover {
    color: #1db954;
    transition: 150ms ease-in;
  }
`;
