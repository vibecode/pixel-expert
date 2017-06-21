import React, { Component } from 'react';
import Intro from './components/Intro';
import './styles/app.css';

class App extends Component {
  render() {
    return (
        <main className="central">
          <div className="central__content">
            <Intro />
          </div>
        </main>
    );
  }
}

export default App;
