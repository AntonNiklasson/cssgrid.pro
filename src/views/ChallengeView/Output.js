import React, { Component } from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div(({ theme }) => ({
  flex: 1,
  padding: '1em',
  fontSize: '40px',
  background: '#CCC',
  userSelect: 'none',

  '& .grid > *': {
    transition: 'all 300ms',
  },
}));

class Output extends Component {
  renderMarkup = () => ({
    __html: this.props.markup,
  });

  render() {
    return <Container dangerouslySetInnerHTML={this.renderMarkup()} />;
  }
}

export default Output;
