import React, { Component } from "react";
import glamorous from "glamorous";

const Container = glamorous.div({
  flex: 1,
  background: "tomato"
});

const Textarea = glamorous.textarea({
  width: "100%",
  height: "100%",
  resize: "none",
  font: "15px monospace",
  padding: "0.5em",
  whiteSpace: "pre-line"
});

class Input extends Component {
  onChange = ({ target: { value } }) => {
    console.log(value);
    this.props.onChange(value);
  };

  render() {
    const { value } = this.props;
    return (
      <Container>
        <Textarea autoFocus value={value} onChange={this.onChange} />
      </Container>
    );
  }
}

export default Input;
