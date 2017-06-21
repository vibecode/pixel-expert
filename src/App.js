import React, { Component } from 'react';
import Intro from './components/Intro';
import Greeting from './components/Greeting';
import Rules from './components/Rules';
import GameDouble from './components/GameDouble';
import GameTriple from './components/GameTriple';
import GameSolo from './components/GameSolo';

import './styles/app.css';

import {
  Router,
  Route,
} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <main className="central">
          <div className="central__content">
            <Router history={history}>
              <div>
                <Route path={"/"} exact component={Intro} />
                <Route path={"/greeting"} component={Greeting} />
                <Route path={"/rules"} component={Rules} />
                <Route path={"/gamesolo"} component={GameSolo} />
                <Route path={"/gameDouble"} component={GameDouble} />
                <Route path={"/gameTriple"} component={GameTriple} />
              </div>
            </Router>
          </div>
        </main>
    );
  }
}

export default App;
