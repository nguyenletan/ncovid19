import { DefaultTheme, createGlobalStyle, keyframes } from 'styled-components';

const shareColor = {
  warning: '#41c7c7',
  success: '#576BE3',
  danger: '#E30613',
  highlight: '#FE6A6A'
};

export const lightTheme: DefaultTheme = {
  borderRadius: '4px',
  colors: {
    primary: '#E30613',
    background: '#F4F6F8',
    backgroundLight: '#FFFFFF',
    text: '#333',
    textLight: '#576BE3',
    borderColor: 'transparent',
    ...shareColor,
  },
};

export const darkTheme: DefaultTheme = {
  borderRadius: '4px',
  colors: {
    primary: '#E30613',
    background: '#222429',
    backgroundLight: '#222429',
    text: '#e0e4e4',
    textLight: '#e0e4e4',
    borderColor: '#e8e9ed',
    ...shareColor,
  },
};

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const mediaQuery = {
  custom: customMediaQuery,
  dekstop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576),
};

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  h3,h4,h5,h5 {
    font-weight: 400;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    /*transition: all 0.25s linear;*/

  }
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.success};
  }
  .container {
    max-width: 800px;
    margin: 0 auto 2rem auto;
    min-height: 100vh;
  }
  .center-text {
    text-align: center;
  }
  .app-logo{
    pointer-events: none;
    /*animation: ${spin} infinite 10s linear;*/
    g {
      fill: ${props => props.theme.colors.primary}
    }
  }
  .company-name-text {
    color: ${props => props.theme.colors.primary};
    font-size: 1.75rem;
    font-weight: 800;
  }
  footer {
    text-align: center;
    font-size: .8rem;
  }
`;
