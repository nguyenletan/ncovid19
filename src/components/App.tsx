import * as React from 'react';
import CountryPicker from './CountryPicker';
import Hero from './Hero';
import Maps from './Maps';
import Stats from './Stats';

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT as string;
const API_ENDPOINT_FOR_MAPS = process.env.REACT_APP_API_FOR_MAPS as string;
const App = () => {
  return (
    <>
      <main className="container">
        <Hero/>
        <CountryPicker/>
        <Maps title="Global Maps" url={API_ENDPOINT_FOR_MAPS}/>
        <Stats title="Global Case" url={API_ENDPOINT}/>
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
        <p>For <strong>NashTech</strong> 💖</p>
      </footer>
    </>
  );
};

export default App;
