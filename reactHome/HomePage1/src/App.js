import React, { Component } from 'react';
import WelcomeBar from '../src/welcomeBar';
import WholeHeader from '../src/wholeHeader';
import Navigator from '../src/navigator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigator/>
        <WholeHeader/>
        <WelcomeBar />
      </div>
    );
  }
}

export default App;
