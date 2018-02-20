import React from 'react'
import glamorous from 'glamorous'
import Markdown from 'react-markdown'
import Transition from 'react-transition-group/Transition'
import Button from '../../components/Button'

const Wrapper = glamorous.div(({ transitionState }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '10vh 0',
  pointerEvents: 'none',
  transition: 'background 300ms',
  background: transitionState === 'entered' ? '#000000CC' : 'transparent',
}))
const Content = glamorous.div(({ transitionState }) => ({
  background: 'white',
  width: '80%',
  maxWidth: 700,
  padding: '4em',
  borderRadius: '3px',
  pointerEvents: 'auto',
  transition: 'opacity 300ms, transform 300ms',

  opacity: transitionState === 'entered' ? 1 : 0,
  transform: transitionState === 'entered' ? 'scale(1)' : 'scale(0)',

  '& h1': {
    lineHeight: 2,
  },
  '& code': {
    display: 'inline-block',
    padding: '.2em',
  },
  '& pre': {
    margin: '1em 0',
    padding: '1em',
    maxWidth: 800,
    whiteSpace: 'pre-wrap',
    background: '#EEE',
  },
}))
const Footer = glamorous.footer({
  marginTop: '3em',
  textAlign: 'center',
})

const IntroductionModal = ({ showing, content, onConfirm }) => (
  <Transition in={showing} timeout={0}>
    {state => (
      <Wrapper transitionState={state}>
        <Content transitionState={state}>
          <Markdown>{content}</Markdown>
          <Footer>
            <Button onClick={onConfirm}>Got it.</Button>
          </Footer>
        </Content>
      </Wrapper>
    )}
  </Transition>
)

export default IntroductionModal
