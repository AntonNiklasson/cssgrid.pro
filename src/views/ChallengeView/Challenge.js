import React from "react";
import glamorous from "glamorous";
import StylesEditor from "./StylesEditor";
import MarkupEditor from "./MarkupEditor";
import Output from "./Output";
import {
  toString as stringifyStyleTree,
  updateTree
} from "../../utils/styletree";
import storage from "../../storage";

const Wrapper = glamorous.div({
  flex: 1,
  display: "grid",
  gridTemplateRows: "1fr 1fr",
  gridTemplateColumns: "minmax(600px, 1fr) 1fr",
  gridTemplateAreas: "'styles markup' 'output output'"
});

class Challenge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markup: this.props.markup,
      styles: this.props.styles
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      markup: nextProps.markup,
      styles: nextProps.styles
    });
  }

  onInputChange = (selector, property, value) => {
    const styles = updateTree(
      { ...this.state.styles },
      selector,
      property,
      value
    );

    this.props.onStylesChanged(styles);
    storage.setFieldValue(selector, property, value);
  };

  render() {
    const { markup, styles } = this.state;

    return (
      <Wrapper>
        <StylesEditor styles={styles} onChange={this.onInputChange} />
        <MarkupEditor markup={markup} />
        <Output markup={markup}>Output</Output>
        <style>{stringifyStyleTree(styles)}</style>
      </Wrapper>
    );
  }
}

export default Challenge;
