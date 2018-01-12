import React from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0,0,0,0.2)',
  padding: '50px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  pointerEvents: 'none',
});
const Content = glamorous.div({
  width: '30vw',
  height: '30vw',
  background: 'whitesmoke',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1em',
  fontSize: '20px',
  textAlign: 'center',
  pointerEvents: 'auto',
});

const SuccessModal = () => {
  return (
    <Container>
      <Content>Awesome! Let's move on to the next challenge!</Content>
    </Container>
  );
};

export default SuccessModal;
