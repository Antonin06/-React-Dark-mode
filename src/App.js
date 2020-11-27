import React from 'react'
import './App.css';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import style from 'styled-theming'
import useTheme from './useTheme'
import { Container } from 'react-bootstrap';

const getBackground = style('mode', {
  light: '#EEE',
  dark: '#111'
});
const getTextColor = style('mode', {
  light: '#111',
  dark: '#EEE'
});

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${getBackground};
  color: ${getTextColor};
  transition: all 0.5s ease-out;
}
`;


const App = () => {

  const theme = useTheme();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Container className="">
          <h1 className="text-center">Hello</h1>
          <button className="" onClick={e => theme.setTheme(
            theme.mode === 'dark'
            ? {mode: 'light'}
            : {mode: 'dark'}
            )}>
              Toggle 
          </button>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
