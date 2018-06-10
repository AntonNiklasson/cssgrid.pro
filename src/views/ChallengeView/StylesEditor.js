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
  ({ theme, showError }) => ({
    flex: "1 0 100px",
    minWidth: 100,
    position: "relative",
    background: theme.colors.white,
    border: !showError
      ? `1px solid ${theme.colors.grayLight}`
      : `1px solid red`,
    borderRadius: 3,
    margin: "0 0 0 .5em",
    padding: "0.2em",
    color: !showError ? "#333" : "red",
    fontSize: "inherit",
    fontFamily: "inherit",
    transition: "all 300ms",

    ":focus": {
      outline: "none",
      color: !showError ? theme.colors.accentDark : "red",
      borderColor: !showError ? theme.colors.primary : "red"
    }
  })
);

class StylesEditor extends Component {
  componentDidMount() {
    this.focusFirstInput();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.challengeTitle !== this.props.challengeTitle) {
      this.focusFirstInput();
    }
  }

  onInputChange = (selector, property) => ({ target: { value } }) => {
    this.props.onChange(selector, property, value);
  };

  onInputKeyPress = (selector, property) => event => {
    if (event.key === "Enter") {
      this.props.onInputEnter(selector, property, event);
    }
  };

  focusFirstInput() {
    document.querySelector("input").focus();
  }

  render() {
    const { styles, hasSubmitError } = this.props;

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
                  const { input: editable, valid } = property;
                  const showError = !valid && hasSubmitError;

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
                          aria-label={`styles-${selector}-${propertyKey}`}
                          type="text"
                          value={property.value}
                          valid={valid}
                          showError={showError}
                          placeholder={property.input.placeholder}
                          onChange={this.onInputChange(selector, propertyKey)}
                          onKeyPress={this.onInputKeyPress(
                            selector,
                            propertyKey
                          )}
                          innerRef={this.props.inputRefCreator(
                            selector,
                            propertyKey
                          )}
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
