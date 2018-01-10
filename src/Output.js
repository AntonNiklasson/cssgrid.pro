import React, { Component } from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div({
  flex: '1 0 400px',
  padding: '10px',
  fontSize: '40px',
  background: 'whitesmoke',

  '& .grid > *': {
    transition: 'all 300ms',
  },
});

class Output extends Component {
  render() {
    return (
      <Container>
        <div className="grid">
          <div className="cat">🐈</div>
          <div className="hejsan" />
          <div className="elephant">🐘</div>
          <div className="shark">🦈</div>
          <div className="dog">🐶</div>
          <div className="turtle">🐢</div>
        </div>
      </Container>
    );
  }
}

export default Output;
