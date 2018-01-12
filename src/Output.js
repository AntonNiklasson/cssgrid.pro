import React, { Component } from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div({
  flex: 1,
  padding: '10px',
  fontSize: '40px',
  background: '#CCC',
  userSelect: 'none',

  '& .grid > *': {
    transition: 'all 300ms',
  },
});

class Output extends Component {
  renderMarkup = () => {
    return {
      __html: this.props.markup,
    };
  };

  render() {
    return <Container dangerouslySetInnerHTML={this.renderMarkup()} />;
  }
}

export default Output;
