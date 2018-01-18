import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import glamorous from 'glamorous';
import LandingPage from './LandingPage';
import Level from './Level';
import levels from './data/levels';

const Wrapper = glamorous.div({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

class App extends Component {
  state = {
    currentLevel: 0,
  };

  gotoPreviousLevel = () => {
    this.setState({ currentLevel: this.state.currentLevel - 1 });
  };

  gotoNextLevel = () => {
    this.setState({ currentLevel: this.state.currentLevel + 1 });
  };

  render() {
    const { currentLevel } = this.state;
    const { title, markup, styles, validator } = levels[currentLevel];
    const hasPreviousLevel = currentLevel > 0;
    const hasNextLevel = currentLevel + 1 < levels.length;

    return (
      <Router>
        <App>
          <Route path="/challenge" component={Level} />
          <Route path="/splash" component={LandingPage} />
        </App>
      </Router>
    );
  }
}

export default App;
