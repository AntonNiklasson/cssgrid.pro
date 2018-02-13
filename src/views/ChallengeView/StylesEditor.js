import React, { Component } from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '2em',
  fontSize: '1.2em',
  userSelect: 'none',
  background: theme.colors.grayLightest,
  borderRight: `1px solid ${theme.colors.grayLight}`,
  overflowY: 'auto',
  fontFamily: 'Source Code Pro, monospace',
}));
const PartialInput = glamorous.div({
  flex: 1,
});
const Rule = glamorous.div({
  margin: '0 0 1em 0',
  '&:last-child': {
    marginBottom: 0,
  },
});
const Selector = glamorous.div(({ theme }) => ({
  color: theme.colors.grayDarker,
  fontWeight: 'bold',
}));
const Property = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  margin: '.1em 0',
  padding: '.2em .2em .2em 1rem',
});
const PropertyKey = glamorous.span(({ theme, editable }) => ({
  margin: '0 0.4rem 0 0',
  ':after': {
    content: ':',
  },
  color: editable ? theme.colors.grayDark : theme.colors.gray,
}));
const PropertyValue = glamorous.span(({ theme }) => ({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  width: 'auto',
  border: 'none',
  fontSize: 'inherit',
  background: 'none',
  transition: 'all 300ms',
  color: theme.colors.gray,
}));
const PropertyInput = glamorous.input(({ theme }) => ({
  width: '100%',
  flex: 1,
  padding: '0.2em',
  background: theme.colors.white,
  border: `1px solid ${theme.colors.grayDark}`,
  fontSize: 'inherit',
  transition: 'all 300ms',
  color: theme.colors.primaryDark,
  ':focus': {
    outline: 'none',
    color: theme.colors.accentDark,
  },
}));

class StylesEditor extends Component {
  constructor(props) {
    super(props);

    this.inputRefs = [];
  }

  onChange = (selector, property) => ({ target: { value } }) => {
    this.props.onChange(selector, property, value);
  };

  inputRefCallback = el => this.inputRefs.push(el);

  render() {
    const { styles } = this.props;
    return (
      <Container>
        <PartialInput>
          {styles.map(rule => (
            <Rule key={rule.selector}>
              <Selector>
                {rule.selector} {` {`}
              </Selector>
              {rule.properties.map(property => {
                const editable = property.input;
                return (
                  <Property key={property.key} editable={editable}>
                    <PropertyKey editable={editable}>
                      {property.key}
                    </PropertyKey>
                    {editable ? (
                      <PropertyInput
                        type="text"
                        value={property.value}
                        placeholder={property.input.placeholder}
                        onChange={this.onChange(rule.selector, property.key)}
                        ref={this.inputRefCallback}
                      />
                    ) : (
                      <PropertyValue>{property.value}</PropertyValue>
                    )}
                  </Property>
                );
              })}
              <Selector>}</Selector>
            </Rule>
          ))}
        </PartialInput>
      </Container>
    );
  }
}
export default StylesEditor;
