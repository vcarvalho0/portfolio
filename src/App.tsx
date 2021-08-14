import React from 'react';

import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

import Routes from './router';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <ThemeProvider theme={light}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>
);

export default App;
