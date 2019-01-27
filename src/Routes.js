import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

class Routes extends PureComponent {
  render() {
    return (
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/about" render={() => <p>about</p>} />
            <Route exact path="/projects" render={() => <p>projects</p>} />
            <Route exact path="/contact" render={() => <p>contact</p>} />
          </Switch>
        </main>
      </>
    );
  }
}

export default Routes;
