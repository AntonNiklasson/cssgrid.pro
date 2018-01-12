import React, { Component } from 'react';
import glamorous from 'glamorous';
import Level from './Level';
import levels from './data/levels';

const Wrapper = glamorous.div({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});
const Nav = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#333',
  borderBottom: '1px solid #666',
  fontSize: '20px',
  color: 'whitesmoke',
  padding: '1em',
  userSelect: 'none',
  '& h1': {
    display: 'inline',
    fontWeight: 'bold',
    fontSize: '25px',
  },
  '& h2': {
    display: 'inline',
    fontWeight: 'bold',
    fontSize: '16px',
    margin: '0 1em',
    textTransform: 'uppercase',
  },
});
const ChallengeNavigation = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
});
const Buttons = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
  '& button': {
    background: 'none',
    fontSize: '14px',
    padding: '.5em',
    margin: '0 0.3em',
    color: 'whitesmoke',
    border: '1px solid whitesmoke',
    borderRadius: '3px',
    ':disabled': {
      borderColor: '#777',
      color: '#777',
    },
  },
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
      <Wrapper>
        <Nav>
          <h1>{title}</h1>
          <ChallengeNavigation>
            <h2>
              Challenge {currentLevel + 1} of {levels.length}
            </h2>
            <Buttons>
              <button
                disabled={!hasPreviousLevel}
                onClick={this.gotoPreviousLevel}
              >
                Previous
              </button>
              <button disabled={!hasNextLevel} onClick={this.gotoNextLevel}>
                Next
              </button>
            </Buttons>
          </ChallengeNavigation>
        </Nav>
        <Level markup={markup} styles={styles} validator={validator} />
      </Wrapper>
    );
  }
}

export default App;
