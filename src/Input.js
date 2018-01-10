import React, { Component } from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div({
  flex: '1 0 400px',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  fontSize: '20px',
  background: '#333',
});
const PartialInput = glamorous.div({
  flex: 1,
});
const Rule = glamorous.div({
  margin: '0 0 2rem 0',
});
const Selector = glamorous.div({
  fontSize: '1.1em',
  color: '#EEE',
});
const Property = glamorous.div({
  display: 'flex',
  margin: '0.2rem 0',
  padding: '0 0 0 1rem',
});
const PropertyKey = glamorous.span({
  color: '#AAA',
  margin: '0 0.4rem 0 0',
  ':after': {
    content: ':',
  },
});
const PropertyValue = glamorous.input({
  flex: 1,
  width: 'auto',
  border: 'none',
  fontSize: 'inherit',
  color: 'tomato',
  background: 'none',
  transition: 'all 300ms',
  ':focus': {
    outline: 'none',
    fontWeight: 'bold',
    color: 'white',
  },
});

class Input extends Component {
  onChange = (selector, property) => ({ target: { value } }) => {
    this.props.onChange(selector, property, value);
  };

  render() {
    const { value } = this.props;
    return (
      <Container>
        <PartialInput>
          {value.map(rule => (
            <Rule key={rule.selector}>
              <Selector>
                {rule.selector} {` {`}
              </Selector>
              {rule.properties.map(property => (
                <Property key={property.key}>
                  <PropertyKey>{property.key}</PropertyKey>
                  <PropertyValue
                    type="text"
                    value={property.value}
                    onChange={this.onChange(rule.selector, property.key)}
                  />
                </Property>
              ))}
              <Selector>{`}`}</Selector>
            </Rule>
          ))}
        </PartialInput>
      </Container>
    );
  }
}

export default Input;
