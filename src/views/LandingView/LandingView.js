import React from 'react'
import glamorous from 'glamorous'
import * as glamor from 'glamor'
import Button from '../../components/Button'
import background from '../../resources/background.jpg'

const Wrapper = glamorous.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: `url(${background}) no-repeat center center fixed`,
  backgroundSize: 'cover',
  fontSize: 25,
  color: '#333',

  '& .content': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '6em 3em',
  },

  '& hgroup': {
    margin: '0 0 5em 0',
    color: 'white',
    textAlign: 'center',
  },

  '& h1': {
    fontSize: '3em',
    fontFamily: 'Roboto Slab',

    position: 'relative',
    opacity: 0,
    animation: `1000ms cubic-bezier(.4, 2.8, .6, .3) 500ms ${glamor.css.keyframes(
      {
        from: {
          opacity: 0,
          top: '-200',
        },
        to: {
          opacity: 1,
          top: 0,
        },
      }
    )} forwards, 2500ms ${glamor.css.keyframes({
      from: { transform: 'scale(.2)' },
      to: { transform: 'scale(1)' },
    })}`,
  },

  '& .button-container': {
    opacity: 0,
    animation: `${glamor.css.keyframes({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    })} 1500ms 3000ms forwards`,
  },

  '& h2': {
    fontSize: '1.2em',
    fontWeight: 'normal',

    opacity: 0,
    animation: `${glamor.css.keyframes({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    })} 2s 1s forwards`,
  },
})
const Footer = glamorous.div(({ theme }) => ({
  flex: '0 0 80px',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1em 3em',
  textAlign: 'center',
  fontSize: 16,
  color: 'white',

  opacity: 0,
  animation: `${glamor.css.keyframes({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })} 3000ms 2000ms forwards`,

  '& a': {
    color: theme.colors.primary,
    textDecoration: 'none',
  },
}))

class LandingView extends React.Component {
  handleGoClick = () => {
    this.props.history.push('/challenge/0')
  }

  render() {
    return (
      <Wrapper>
        <div className="content">
          <hgroup>
            <h1>Learn CSS Grid!</h1>
            <h2>An Interactive Tutorial</h2>
          </hgroup>
          <div className="button-container">
            <Button crazy onClick={this.handleGoClick}>
              Let's go! 🚀
            </Button>
          </div>
        </div>
        <Footer>
          <div>
            Made by <a href="http://www.antonniklasson.se">Anton Niklasson</a>
          </div>
          <div>
            <a href="http://github.com/AntonNiklasson/cssgrid.pro">
              github.com/AntonNiklasson/cssgrid.pro
            </a>
          </div>
        </Footer>
      </Wrapper>
    )
  }
}

export default LandingView
