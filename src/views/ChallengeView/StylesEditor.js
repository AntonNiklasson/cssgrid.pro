import React, { Component } from "react";
import glamorous from "glamorous";

const Container = glamorous.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "1em",
  overflow: "auto",

  fontSize: 20,
  background: theme.colors.grayLightest,
  borderRight: `1px solid ${theme.colors.grayLight}`,
  fontFamily: "Source Code Pro, monospace",

  userSelect: "none"
}));
const PartialInput = glamorous.div({
  flex: 1
});
const Rule = glamorous.div({
  margin: "0 0 1em 0",
  "&:last-child": {
    marginBottom: 0
  }
});
const Selector = glamorous("div", { displayname: "Selector" })(({ theme }) => ({
  color: theme.colors.grayDarker,
  fontWeight: "bold"
}));
const Property = glamorous("div", { displayName: "Property" })(({ valid }) => ({
  position: "relative",
  display: "flex",
  flexFlow: "row wrap",
  alignItems: "center",
  maxWidth: 800,
  margin: ".1em 0",
  padding: ".2em .2em .2em 1rem",
  ":after": {
    content: valid ? '"👍"' : '""',
    position: "absolute",
    top: 0,
    right: -20,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));
const PropertyKey = glamorous("div", { displayName: "PropertyKey" })(
  ({ theme, editable }) => ({
    lineHeight: 1.5,
    ":after": {
      content: ":"
    },
    color: editable ? theme.colors.grayDark : theme.colors.gray
  })
);
const PropertyValue = glamorous.span(({ theme }) => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  width: "auto",
  border: "none",
  fontSize: "inherit",
  background: "none",
  transition: "all 300ms",
  color: theme.colors.gray,
  margin: "0 0 0 .5em"
}));
const PropertyInput = glamorous("input", { displayName: "PropertyInput" })(
  ({ theme }) => ({
    flex: "1 0 100px",
    minWidth: 100,
    position: "relative",
    background: theme.colors.white,
    border: `1px solid ${theme.colors.grayLight}`,
    borderRadius: 3,
    margin: "0 0 0 .5em",
    padding: "0.2em",
    fontSize: "inherit",
    fontFamily: "inherit",
    transition: "all 300ms",
    ":focus": {
      outline: "none",
      color: theme.colors.accentDark,
      borderColor: theme.colors.primary
    }
  })
);

class StylesEditor extends Component {
  onChange = (selector, property) => ({ target: { value } }) => {
    this.props.onChange(selector, property, value);
  };

  render() {
    const { styles } = this.props;
    return (
      <Container>
        <PartialInput>
          {Object.keys(styles).map(selector => {
            const rule = styles[selector];

            return (
              <Rule key={selector}>
                <Selector>
                  {selector} {` {`}
                </Selector>
                {Object.keys(rule.properties).map(propertyKey => {
                  const property = rule.properties[propertyKey];
                  const editable = property.input;
                  const valid = property.valid;

                  return (
                    <Property
                      key={propertyKey}
                      editable={editable}
                      valid={valid}
                    >
                      <PropertyKey editable={editable}>
                        {propertyKey}
                      </PropertyKey>
                      {editable ? (
                        <PropertyInput
                          type="text"
                          value={property.value}
                          placeholder={property.input.placeholder}
                          onChange={this.onChange(selector, propertyKey)}
                        />
                      ) : (
                        <PropertyValue>{property.value};</PropertyValue>
                      )}
                    </Property>
                  );
                })}
                <Selector>}</Selector>
              </Rule>
            );
          })}
        </PartialInput>
      </Container>
    );
  }
}
export default StylesEditor;
