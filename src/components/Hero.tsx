import * as React from 'react';
import styled from 'styled-components';

import FloatingButton from './FloatingButton';
import { mediaQuery } from '../themes';
import { ReactComponent as Logo } from './assets/logo.svg';

const HeroContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem 0 1rem 0;
  ${mediaQuery.tablet} {
    padding: 1rem 0;
  }
`;

const HeroTitle = styled.h1`
  font-size: 1.5em;
  margin-bottom: 0.1rem;
  ${mediaQuery.tablet} {
    font-size: 1.3em;
  }
`;

const StyledLogo = styled(Logo)`
  height: 100px;
  width: 100px;
  ${mediaQuery.tablet} {
    width: 80px;
    height: 80px;
  }
  fill: ${({ theme }) => theme.colors.textLight};
`;

const Hero = () => (
  <HeroContainer>
    <FloatingButton />
    <a href="https://www.nashtechglobal.com/" target="_blank" rel="noopener noreferrer">
      <StyledLogo className="app-logo"></StyledLogo>
    </a>
    <HeroTitle>Covid-19 Monitor</HeroTitle>
  </HeroContainer>
);

export default Hero;
