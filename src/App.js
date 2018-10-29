import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro';
import Description from './components/Description';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <Description />
      </div>
    );
  }
}

export default App;
