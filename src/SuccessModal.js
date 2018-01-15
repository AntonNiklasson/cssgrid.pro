import React from 'react';
import glamorous from 'glamorous';
import Transition from 'react-transition-group/Transition';

const Container = glamorous.div({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'transparent',
  padding: '50px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  pointerEvents: 'none',
});
const Content = glamorous.div({
  width: '30vw',
  background: 'whitesmoke',
  padding: '2em',
  fontSize: '20px',
  textAlign: 'center',
  pointerEvents: 'auto',

  transition: 'all 300ms',
  transform: 'scale(0)',
  opacity: 0,
});

const transitionStyles = {
  entering: {
    opacity: 0,
    transform: 'scale(0)',
  },
  entered: {
    opacity: 1,
    transform: 'scale(1)',
  },
};

const SuccessModal = ({ showing }) => {
  return (
    <Transition in={showing} timeout={500}>
      {state => (
        <Container>
          <Content style={transitionStyles[state]}>
            <h2>Awesome! 🙌</h2>
            <p>Let's move on to the next challenge!</p>
          </Content>
        </Container>
      )}
    </Transition>
  );
};

export default SuccessModal;
