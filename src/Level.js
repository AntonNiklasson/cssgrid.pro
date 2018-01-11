import React from 'react';
import glamorous from 'glamorous';
import InputContainer from './Input';
import OutputContainer from './Output';

const Wrapper = glamorous.div({
  flex: 1,
  display: 'flex',
  flexFlow: 'row wrap',
});

const styleTreeToString = tree =>
  tree.reduce(
    (raw, rule) =>
      `${raw}
    ${rule.selector} {
      ${rule.properties.reduce(
        (raw, property) =>
          `${raw}
          ${property.key}: ${property.value};`,
        ''
      )}
    }`,
    ''
  );

class Level extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markup: props.markup,
      styles: props.styles,
    };
  }

  onInputChange = (selector, propertyKey, value) => {
    const state = this.state.styles.map(rule => {
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

    this.setState({ styles: state });
  };

  render() {
    const { markup, styles } = this.state;
    return (
      <Wrapper>
        <InputContainer
          markup={markup}
          styles={styles}
          onChange={this.onInputChange}
        />
        <OutputContainer>Output</OutputContainer>
        <style>{styleTreeToString(styles)}</style>
      </Wrapper>
    );
  }
}

export default Level;
