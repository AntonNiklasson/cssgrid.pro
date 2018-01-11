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
  fontSize: '20px',
  color: 'whitesmoke',
  margin: '0 0 1em 0',
  padding: '1em',
  userSelect: 'none',
  '& button': {
    background: 'none',
    fontSize: '14px',
    padding: '.5em',
    margin: '0.1em',
    color: 'whitesmoke',
    borderRadius: '3px',
    ':disabled': {
      cursor: 'not-allowed',
      textDecoration: 'line-through',
    },
  },
  '& h1': {
    display: 'inline',
    fontWeight: 'bold',
    fontSize: '25px',
  },
  '& h2': {
    display: 'inline',
    fontWeight: 'normal',
    fontSize: '16px',
    margin: '0 1em',
  },
});

class App extends Component {
  state = {
    currentLevel: 0,
  };

  render() {
    const { currentLevel } = this.state;
    const { title, markup, styles } = levels[0];
    const hasPreviousLevel = currentLevel > 0;
    const hasNextLevel = currentLevel + 1 < levels.length;

    return (
      <Wrapper>
        <Nav>
          <h1>{title}</h1>
          <div>
            <button disabled={!hasPreviousLevel}>Previous</button>
            <h2>
              Level {currentLevel + 1} of {levels.length}
            </h2>
            <button disabled={!hasNextLevel}>Next</button>
          </div>
        </Nav>
        <Level markup={markup} styles={styles} />;
      </Wrapper>
    );
  }
}

export default App;
