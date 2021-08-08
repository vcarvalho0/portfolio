import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
`;

export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  padding-top: 30px;
  padding-bottom: 10px;
  width: 15%;
`;

export const Button = styled.button`
  color: white;
  background: #448dee;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: #2e84f6;
  }
`;

export const Title = styled.h1`
  font-size: 35px;
  font-family: sans-serif;
  margin: 10px 0 10px 0;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Description = styled.p`
  font-size: 17px;
  font-family: sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
