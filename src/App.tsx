import React from 'react';

import { ThemeProvider, DefaultTheme } from 'styled-components';

import Navbar from './components/Navbar';

import Routes from './router';
import usePersistedState from './utils/PersistedState';

import GlobalStyle from './styles/global';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const Theme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar toggleTheme={Theme} />
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
