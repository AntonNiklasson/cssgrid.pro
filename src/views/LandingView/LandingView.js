import React from 'react';
import glamorous from 'glamorous';

const Wrapper = glamorous.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'whitesmoke',
  color: '#333',

  '& h1': {
    margin: '0 0 1em 0',
  },
});

const LandingView = () => (
  <Wrapper>
    <h1>Learn CSS Grid</h1>
    <h2>Soon.</h2>
  </Wrapper>
);

export default LandingView;
