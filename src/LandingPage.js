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
  fontSize: 20,
  color: '#DDD',
  transition: 'all 300ms',
  padding: '.4em 1em',
  background: 'transparent',
  border: '2px solid rgba(255,255,255,0.8)',
  transition: 'all 300ms',
  ':hover': {
    color: 'white',
    background: 'rgba(200, 200, 200, 0.2)',
  },
});
const Footer = glamorous.div({
  padding: '1em',
  textAlign: 'center',
  color: '#CCC',
  '& a': {
    color: 'white',
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
        <Link href="/challenge">Let's go!</Link>
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
