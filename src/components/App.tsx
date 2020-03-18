import * as React from 'react';
import Hero from './Hero';
import CountryPicker from './CountryPicker';
import Stats from './Stats';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT as string;

const App = () => {
  return (
    <>
        <main className="container">
          <Hero />
          <CountryPicker />
          <Stats title="Global Case" url={API_ENDPOINT} />
        </main>
        <footer>
          <p>Forked From: github.com:alankilalank/react-covid-19.git</p>
          <p>Data sources from{' '}
          <a
            href="https://github.com/mathdroid/covid-19-api"
            target="_blank"
            rel="noopener noreferrer"
          >
            Muhammad Mustadi's
          </a>{' '}
            API</p>
          <p>Modified by: Tan Nguyen LE</p>
          <p>For <strong>NashTech</strong> - một thời trai trẻ 💖</p>
        </footer>
    </>
  );
};

export default App;
