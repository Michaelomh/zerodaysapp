import React, { Component } from 'react';
import ButtonPanel from './ButtonsPanel';
import MainPanel from './MainPanel';

class App extends Component {
  render() {
    return (
      <div className="root">
        <MainPanel />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
