import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes />
        </main>
      </div>
    );
  }
}

export default App;
