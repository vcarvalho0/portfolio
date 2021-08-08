import React from 'react';

import Routes from './router';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Routes />
  </>
);

export default App;
