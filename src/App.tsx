import React from 'react';
import './App.css';
import { Web3Provider } from './components/web3_provider';

function App() {
  return (
    <Web3Provider widget={<p> Testing</p>} />
  );
}

export default App;
