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
}));
const PartialInput = glamorous.div({
  flex: 1,
});
const Rule = glamorous.div({
  margin: '0 0 2em 0',
  '&:last-child': {
    marginBottom: 0,
  },
});
const Selector = glamorous.div(({ theme }) => ({
  color: theme.colors.grayDarker,
}));
const Property = glamorous.div(({ theme, editable }) => ({
  display: 'flex',
  alignItems: 'center',
  maxWidth: '350px',
  margin: '.1em 0',
  padding: '.2em .2em .2em 1rem',
  background: editable ? theme.colors.grayLighter : 'transparent',
  border: editable ? '1px solid rgba(255,255,255, 0.3)' : 'none',
  borderRadius: editable ? '2px' : 'none',
}));
const PropertyKey = glamorous.span(({ theme, editable }) => ({
  margin: '0 0.4rem 0 0',
  ':after': {
    content: ':',
  },
  color: editable ? theme.colors.accentDark : theme.colors.grayDarker,
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
  color: theme.colors.grayLight,
}));
const PropertyInput = glamorous.input(({ theme }) => ({
  width: '100%',
  background: 'transparent',
  fontSize: 'inherit',
  border: 'none',
  transition: 'all 300ms',
  color: theme.colors.primaryDark,
  ':focus': {
    outline: 'none',
    fontSize: '1.3em',
    color: theme.colors.accentDark,

    '&::placeholder': {
      color: theme.colors.grayDark,
    },
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
                    <PropertyValue>
                      {!editable ? (
                        property.value
                      ) : (
                        <PropertyInput
                          type="text"
                          value={property.value}
                          placeholder={property.input.placeholder}
                          onChange={this.onChange(rule.selector, property.key)}
                          ref={this.inputRefCallback}
                        />
                      )}
                    </PropertyValue>
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
