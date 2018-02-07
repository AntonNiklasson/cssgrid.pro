import React from 'react';
import glamorous from 'glamorous';

const Wrapper = glamorous.div({
  width: '100vw',
  height: '100vh',
  background: 'whitesmoke',
  color: '#333',
});

const LandingView = () => {
  return (
    <Wrapper>
      <h1>CSS Grid</h1>
    </Wrapper>
  );
};

export default LandingView;
