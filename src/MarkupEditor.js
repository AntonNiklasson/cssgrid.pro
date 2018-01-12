import React, { Component } from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div({
  flex: 1,
  background: '#333',
  padding: '1em',
  color: '#CCC',
  fontSize: '16px',
  userSelect: 'none',
  lineHeight: 1.5,
});

class StylesEditor extends Component {
  render() {
    const { markup } = this.props;
    return (
      <Container>
        <pre>{markup}</pre>
      </Container>
    );
  }
}

export default StylesEditor;
