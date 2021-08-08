import React from 'react';

interface IContact {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const Contact: React.FC<IContact> = () => (
  <div>
    <h1>Hello World</h1>
  </div>
);

export default Contact;
