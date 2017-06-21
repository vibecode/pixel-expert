import React, { Component } from 'react';
import Intro from './components/Intro';
import './styles/app.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
        <main className="central">
          <div className="central__content">
            <Header/>
            <Intro />
          </div>
        </main>
    );
  }
}

export default App;
