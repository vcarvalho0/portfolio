import styled from 'styled-components';

import { AiOutlineMail } from 'react-icons/ai';

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 80vh;
`;

export const ContactCard = styled.div`
  display: grid;
  grid-template-columns: 400px;
  grid-template-rows: 210px 210px;
  grid-template-areas: 'text';
  box-shadow: 0 2px 10px gray;
  transition: transform 200ms ease-in;
  background: ${(props) => props.theme.colors.background};
`;

export const CardText = styled.div`
  grid-area: text;

  > p {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 20px;
    font-weight: 300;
    margin-top: 15px;
  }

  > h2 {
    margin-top: 0px;
    font-size: 28px;
    color: #333;
  }
`;

export const MailIcon = styled(AiOutlineMail)`
  margin: 50px;
  width: 50px;
  height: 50px;
  color: ${(props) => props.theme.colors.secondary};
`;
