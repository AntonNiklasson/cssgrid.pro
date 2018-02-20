import React from 'react'
import glamorous from 'glamorous'
import Transition from 'react-transition-group/Transition'
import Button from '../../components/Button'

const Container = glamorous.div(
  {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: '200px 0 0 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    pointerEvents: 'none',
    transition: 'all 400ms',
  },
  ({ state }) => ({
    background: state === 'entered' ? 'rgba(0,0,0, .4)' : 'transparent',
  })
)
const Content = glamorous.div(
  {
    width: '30vw',
    background: 'whitesmoke',
    padding: '2em',
    fontSize: '20px',
    textAlign: 'center',
    pointerEvents: 'auto',

    transition: 'all 300ms',
    transform: 'scale(0)',
    opacity: 0,
  },
  ({ state }) => {
    if (state === 'entering') {
      return {
        opacity: 0,
        transform: 'scale(0)',
      }
    }

    if (state === 'entered') {
      return {
        opacity: 1,
        transform: 'scale(1)',
      }
    }

    return {}
  }
)
const ButtonsContainer = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  margin: '2em 0 0 0',
})

const SuccessModal = ({ showing, onNextChallengeClicked }) => (
  <Transition in={showing} timeout={0}>
    {state => (
      <Container state={state}>
        <Content state={state}>
          <h2>Awesome! 🙌</h2>
          <p>Lets move on to the next challenge!</p>

          <ButtonsContainer>
            <Button large onClick={onNextChallengeClicked}>
              Go!
            </Button>
          </ButtonsContainer>
        </Content>
      </Container>
    )}
  </Transition>
)

export default SuccessModal
