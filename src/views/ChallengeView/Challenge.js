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
  overflow: 'scroll-y',
});
const OutputContainer = glamorous.div(({ theme }) => ({
  flex: 1,
  display: 'flex',
  overflowY: 'auto',
  borderTop: `2px solid ${theme.colors.gray}`,
}));

const styleTreeToString = tree => {
  if (!tree) return null;

  const propertyToString = property =>
    property.key && property.value ? `${property.key}: ${property.value};` : '';
  const ruleToString = rule =>
    `${rule.selector} { ${rule.properties.map(propertyToString).join(' ')} }`;

  return tree.map(ruleToString).join(' ');
};

class Challenge extends React.Component {
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

  onInputChange = (selector, updatedProperty, value) => {
    const styles = this.state.styles.map(rule => {
      if (rule.selector !== selector) return rule;

      return {
        ...rule,
        properties: rule.properties.map(property => {
          if (property.key !== updatedProperty.key) return property;

          return {
            ...updatedProperty,
            valid: property.input.regex && property.input.regex.test(value),
            value,
          };
        }),
      };
    });

    console.log('Updated styles:', styles);

    this.props.onStylesChanged(styles);
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
        <OutputContainer>
          <Output markup={markup}>Output</Output>
        </OutputContainer>
        <style>{styleTreeToString(styles)}</style>
      </Wrapper>
    );
  }
}

export default Challenge;
