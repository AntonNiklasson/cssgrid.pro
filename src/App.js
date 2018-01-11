import React, { Component } from 'react';
import glamorous from 'glamorous';
import InputContainer from './Input';
import OutputContainer from './Output';

const Wrapper = glamorous.div({
  height: '100%',
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

class App extends Component {
  state = {
    markup: `<div class="grid">
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="shark">🦈</div>
  <div class="dog">🐶</div>
  <div class="turtle">🐢</div>
</div>`,
    styles: [
      {
        selector: '.grid',
        properties: [
          { key: 'display', value: 'grid' },
          { key: 'grid-template-rows', value: '1fr 1fr 1fr', editable: true },
          {
            key: 'grid-template-columns',
            value: '1fr 1fr 1fr',
            editable: true,
          },
          { key: 'grid-gap', value: '5px', editable: true },
        ],
      },
      {
        selector: '.cat, .elephant, .shark, .dog, .turtle',
        properties: [
          { key: 'display', value: 'flex' },
          { key: 'justify-content', value: 'center' },
          { key: 'align-items', value: 'center' },
          { key: 'background', value: 'tomato' },
          { key: 'padding', value: '2rem' },
        ],
      },
    ],
  };

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

export default App;
