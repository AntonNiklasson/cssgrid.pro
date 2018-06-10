import React, { Component } from "react";
import glamorous from "glamorous";

const Container = glamorous.div(({ theme }) => ({
  gridArea: "output",
  padding: "1em",
  fontSize: "30px",
  background: "#CCC",
  backgroundImage: "linear-gradient(#ffaeae, #ff99e9)",
  borderTop: `1px solid ${theme.colors.gray}`,
  userSelect: "none",
  overflow: "auto",

  "& .grid": {
    display: "grid",
    width: "100%",
    background: theme.colors.primaryLight,
    transition: "all 500ms"
  },
  "& .grid > *": {
    padding: ".2em",
    border: `3px solid ${theme.colors.primary}`,
    transition: "all 300ms"
  }
}));

class Output extends Component {
  renderMarkup = () => ({
    __html: this.props.markup
  });

  render() {
    return <Container dangerouslySetInnerHTML={this.renderMarkup()} />;
  }
}

export default Output;
