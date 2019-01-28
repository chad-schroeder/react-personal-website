import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

class Routes extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
          <Route exact path="/projects" render={() => <Projects />} />
          <Route exact path="/contact" render={() => <Contact />} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

export default Routes;
