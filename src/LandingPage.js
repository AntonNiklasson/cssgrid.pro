import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import glamorous from 'glamorous';
import background from './background.jpg';

const Container = glamorous.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  background: `url(${background})`,
  backgroundSize: 'cover',
  color: 'whitesmoke',
});
const Content = glamorous.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});
const Title = glamorous.h1({
  fontSize: '60px',
  fontWeight: 'normal',
  margin: '0 0 1em 0',
});
const Link = glamorous.a({
  display: 'inline-block',
  textDecoration: 'none',
  fontSize: 25,
  fontWeight: 'bold',
  color: '#DDD',
  transition: 'all 300ms',
  padding: '.3em .6em',
  background: 'transparent',
  border: '3px solid rgba(255,255,255,0.8)',
  transition: 'all 300ms',

  ':hover': {
    color: 'white',
    background: 'rgba(200, 200, 200, 0.2)',
  },
});
const Footer = glamorous.div({
  padding: '1em',
  // background: 'rgba(0,0,0,0.3)',
  textAlign: 'center',
  color: 'whitesmoke',
  '& a': {
    color: 'gold',
  },
});

const LandingPage = () => {
  return (
    <Container>
      <Content>
        <Title>
          Are you ready for<br />
          <strong>CSS Grid</strong>? 😍
        </Title>
        <Link href="/challenge/1">Let's go!</Link>
      </Content>
      <Footer>
        Made by{' '}
        <a href="http://www.twitter.com/AntonNiklasson">Anton Niklasson</a>.
        Source available on <a href="#">GitHub</a>.
      </Footer>
    </Container>
  );
};

export default LandingPage;
