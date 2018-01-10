import React, { Component } from "react";
import glamorous from "glamorous";
import InputContainer from "./Input";
import OutputContainer from "./Output";

const Wrapper = glamorous.div({
  height: "100%",
  display: "flex",
  flexDirection: "row"
});

class App extends Component {
  state = {
    styles: `.grid {
    display: grid;
    width: 100px;
    height: 100px;
    background: Tomato;
}`
  };

  onInputChange = value => {
    this.setState({ styles: value });
  };

  render() {
    const { styles } = this.state;
    return (
      <Wrapper>
        <InputContainer value={styles} onChange={this.onInputChange} />
        <OutputContainer>Output</OutputContainer>
        <style>{styles}</style>
      </Wrapper>
    );
  }
}

export default App;
