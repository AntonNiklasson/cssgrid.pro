import React, { Component } from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  borderRight: '1px solid #666',
  fontSize: '18px',
  background: '#333',
  userSelect: 'none',
});
const PartialInput = glamorous.div({
  flex: 1,
});
const Rule = glamorous.div({
  margin: '0 0 2rem 0',
  '&:last-child': {
    marginBottom: 0,
  },
});
const Selector = glamorous.div({
  fontSize: '1.1em',
  color: '#EEE',
});
const Property = glamorous.div({
  display: 'flex',
  margin: '0.3rem 0',
  padding: '0 0 0 1rem',
});
const PropertyKey = glamorous.span({
  color: '#AAA',
  margin: '0 0.4rem 0 0',
  ':after': {
    content: ':',
  },
});
const PropertyValue = glamorous.span({
  flex: 1,
  width: 'auto',
  border: 'none',
  fontSize: 'inherit',
  color: '#CCC',
  background: 'none',
  transition: 'all 300ms',
  '& input': {
    fontSize: 'inherit',
    color: 'tomato',
    border: 'none',
    background: 'none',
    transition: 'all 300ms',
    ':focus': {
      outline: 'none',
      fontWeight: 'bold',
    },
  },
});

const Markup = glamorous.pre({
  flex: 1,
  fontSize: '0.8em',
  margin: '1em 0 0 0',
  padding: '1em 0',
  // background: 'whitesmoke',
  borderTop: '1px solid #666',
  color: 'gray',
});

class StylesEditor extends Component {
  onChange = (selector, property) => ({ target: { value } }) => {
    this.props.onChange(selector, property, value);
  };

  render() {
    const { styles, markup } = this.props;
    return (
      <Container>
        <PartialInput>
          {styles.map(rule => (
            <Rule key={rule.selector}>
              <Selector>
                {rule.selector} {` {`}
              </Selector>
              {rule.properties.map(property => (
                <Property key={property.key}>
                  <PropertyKey>{property.key}</PropertyKey>
                  <PropertyValue>
                    {!property.input || !property.input.editable ? (
                      property.value
                    ) : (
                      <input
                        type="text"
                        value={property.value}
                        placeholder={property.input.placeholder}
                        onChange={this.onChange(rule.selector, property.key)}
                        autoFocus={true}
                      />
                    )}
                  </PropertyValue>
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

export default StylesEditor;
