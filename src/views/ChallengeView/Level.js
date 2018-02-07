import React from 'react';
import glamorous from 'glamorous';
import StylesEditor from './StylesEditor';
import MarkupEditor from './MarkupEditor';
import Output from './Output';

const Wrapper = glamorous.div({
  flex: 1,
  display: 'flex',
  flexFlow: 'column',
  position: 'relative',
});

const Editors = glamorous.div({
  flex: 1,
  display: 'flex',
});

const styleTreeToString = tree => {
  if (!tree) return null;

  return tree.reduce(
    (ruleBlob, rule) =>
      `${ruleBlob}
    ${rule.selector} {
      ${rule.properties.reduce(
        (propertyBlob, property) =>
          `${propertyBlob}
          ${property.key}: ${property.value};`,
        ''
      )}
    }`,
    ''
  );
};

class Level extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markup: this.props.markup,
      styles: this.props.styles,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      markup: nextProps.markup,
      styles: nextProps.styles,
    });
  }

  onInputChange = (selector, propertyKey, value) => {
    const styles = this.state.styles.map(rule => {
      if (rule.selector !== selector) return rule;

      return {
        ...rule,
        properties: rule.properties.map(property => {
          if (property.key !== propertyKey) return property;

          return {
            ...property,
            value,
          };
        }),
      };
    });

    this.props.onStylesChanged(styles);

    if (this.props.validator(styles)) {
      this.props.onChallengeCompleted();
    }
  };

  render() {
    const { markup, styles } = this.state;

    if (!markup || !styles) return null;

    return (
      <Wrapper>
        <Editors>
          <StylesEditor styles={styles} onChange={this.onInputChange} />
          <MarkupEditor markup={markup} />
        </Editors>
        <Output markup={markup}>Output</Output>
        <style>{styleTreeToString(styles)}</style>
      </Wrapper>
    );
  }
}

export default Level;
