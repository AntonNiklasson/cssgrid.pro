import React, { Component } from 'react'
import glamorous from 'glamorous'

const Container = glamorous.div(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '2em',
  fontSize: 20,
  userSelect: 'none',
  background: theme.colors.grayLightest,
  borderRight: `1px solid ${theme.colors.grayLight}`,
  overflowY: 'auto',
  fontFamily: 'Source Code Pro, monospace',
}))
const PartialInput = glamorous.div({
  flex: 1,
})
const Rule = glamorous.div({
  margin: '0 0 1em 0',
  '&:last-child': {
    marginBottom: 0,
  },
})
const Selector = glamorous.div(({ theme }) => ({
  color: theme.colors.grayDarker,
  fontWeight: 'bold',
}))
const Property = glamorous.div(({ valid }) => ({
  position: 'relative',
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  margin: '.1em 0',
  padding: '.2em .2em .2em 1rem',
  ':after': {
    content: valid ? '"👍"' : '""',
    position: 'absolute',
    top: 0,
    right: -20,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
const PropertyKey = glamorous.span(({ theme, editable }) => ({
  lineHeight: 1.5,
  ':after': {
    content: ':',
  },
  color: editable ? theme.colors.grayDark : theme.colors.gray,
}))
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
}))
const PropertyInput = glamorous.input(({ theme }) => ({
  flex: '1 0 100px',
  minWidth: 100,
  position: 'relative',
  background: theme.colors.white,
  border: `1px solid ${theme.colors.grayLight}`,
  borderRadius: 3,
  margin: '0 0 0 .4em',
  padding: '0.2em',
  fontSize: 'inherit',
  fontFamily: 'inherit',
  transition: 'all 300ms',
  ':focus': {
    outline: 'none',
    color: theme.colors.accentDark,
    borderColor: theme.colors.primary,
  },
}))

class StylesEditor extends Component {
  onChange = (selector, property) => ({ target: { value } }) => {
    this.props.onChange(selector, property, value)
  }

  render() {
    const { styles } = this.props
    return (
      <Container>
        <PartialInput>
          {styles.map(rule => (
            <Rule key={rule.selector}>
              <Selector>
                {rule.selector} {` {`}
              </Selector>
              {rule.properties.map(property => {
                const editable = property.input
                const valid =
                  property.input &&
                  property.input.regex &&
                  property.input.regex.test(property.value)

                return (
                  <Property
                    key={property.key}
                    editable={editable}
                    valid={valid}
                  >
                    <PropertyKey editable={editable}>
                      {property.key}
                    </PropertyKey>
                    {editable ? (
                      <PropertyInput
                        type="text"
                        value={property.value}
                        placeholder={property.input.placeholder}
                        onChange={this.onChange(rule.selector, property.key)}
                      />
                    ) : (
                      <PropertyValue>{property.value}</PropertyValue>
                    )}
                  </Property>
                )
              })}
              <Selector>}</Selector>
            </Rule>
          ))}
        </PartialInput>
      </Container>
    )
  }
}
export default StylesEditor
