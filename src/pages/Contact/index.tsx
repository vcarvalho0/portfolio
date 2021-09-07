import React from 'react';

import Footer from '../../components/Footer';

import {
  ContactContainer, ContactCard, CardText, MailIcon,
} from './style';

const Contact: React.FC = () => (
  <>
    <ContactContainer>
      <ContactCard>
        <CardText>
          <MailIcon />
          <h1>Contact Me</h1>
          <p>Email - vitor1.santos@hotmail.com</p>
          <p>Discord - Vitor#1033</p>
        </CardText>
      </ContactCard>
    </ContactContainer>
    <Footer />
  </>
);

export default Contact;
