import React, { Component } from "react";
import glamorous from "glamorous";

const Container = glamorous.div({
  flex: 1,
  background: "#EEE"
});

class Output extends Component {
  render() {
    return (
      <Container>
        <div className="grid" />
      </Container>
    );
  }
}

export default Output;
