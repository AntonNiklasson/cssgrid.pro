import React from 'react';
import glamorous from 'glamorous';
import Button from '../../components/Button';

const Wrapper = glamorous.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '3em',
  fontSize: 25,
  background: 'whitesmoke',
  color: '#333',

  '& h1': {
    display: 'inline-block',
    margin: '0 0 1em 0',
    padding: '.2em',
    background: '#1b498e',
    color: 'white',
    transform: 'rotate(4deg)',
    transition: 'all 400ms',

    ':hover': {
      transform: 'scale(1.3)',
    },
  },

  '& p': {
    width: '100%',
    maxWidth: '600px',
    margin: '0.3em 0',
  },

  '& hr': {
    height: '1px',
    width: '100%',
    maxWidth: '600px',
    margin: '2em 0',
    background: '#CCC',
    border: 'none',
  },
});

class LandingView extends React.Component {
  handleGoClick = () => {
    this.props.history.push('/challenge/1');
  };

  render() {
    return (
      <Wrapper>
        <h1>Learn CSS Grid!</h1>
        <p>
          This is an interactive guide through the different properties in the
          CSS Grid module.
        </p>
        <p>
          Make your way through the different challenges by changing the
          property values in the editor by hand.
        </p>

        <hr />

        <Button large primary onClick={this.handleGoClick}>
          Let's go!
        </Button>
      </Wrapper>
    );
  }
}

export default LandingView;
