import React, { Component } from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div(({ theme }) => ({
  flex: 1,
  padding: '1em',
  fontSize: '30px',
  background: '#CCC',
  userSelect: 'none',

  '& .grid': {
    display: 'grid',
    width: '100%',
    background: theme.colors.primaryLight,
    transition: 'all 500ms',
  },
  '& .grid > *': {
    padding: '1em',
    background: theme.colors.accentLight,
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
