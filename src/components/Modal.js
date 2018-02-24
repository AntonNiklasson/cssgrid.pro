import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'
import glamorous from 'glamorous'
import Transition from 'react-transition-group/Transition'
import Button from './Button'

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
  background: '#000000CC',

  transition: 'opacity 200ms',
  opacity: transitionState === 'entered' ? 1 : 0,
}))
const Content = glamorous.div(() => ({
  background: 'white',
  width: '80%',
  maxWidth: 700,
  padding: '4em',
  borderRadius: '3px',
  pointerEvents: 'auto',

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
const ButtonsContainer = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  margin: '4em 0 0 0',
})

const Modal = ({ visible, markdown, content, onConfirm, confirmLabel }) => (
  <Transition in={visible} timeout={0}>
    {state => (
      <Wrapper transitionState={state}>
        <Content>
          {markdown ? <Markdown>{content}</Markdown> : content}
          <ButtonsContainer>
            <Button onClick={onConfirm}>{confirmLabel}</Button>
          </ButtonsContainer>
        </Content>
      </Wrapper>
    )}
  </Transition>
)

Modal.propTypes = {
  content: PropTypes.string.isRequired,
  markdown: PropTypes.bool,
  onConfirm: PropTypes.func.isRequired,
  confirmLabel: PropTypes.string,
  visible: PropTypes.bool,
}

Modal.defaultProps = {
  visible: true,
  markdown: false,
  confirmLabel: 'Ok',
}

export default Modal
