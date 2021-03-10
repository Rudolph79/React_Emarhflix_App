import './App.css';
import React, { Component } from 'react'
import { Header } from './components';
import { Home } from './routes/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header badge={16} />
        <Home />
      </div>
    );
  }
}

export default App;
