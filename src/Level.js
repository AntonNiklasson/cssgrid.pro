import React from 'react';
import glamorous from 'glamorous';
import StylesEditor from './StylesEditor';
import MarkupEditor from './MarkupEditor';
import Output from './Output';
import levels from './data/levels';
import SuccessModal from './SuccessModal';

const Wrapper = glamorous.div({
  flex: 1,
  display: 'flex',
  flexFlow: 'column',
  position: 'relative',
  background: 'red',
});
const Editors = glamorous.div({
  flex: 1,
  display: 'flex',
});
const OutputContainer = glamorous.div({
  flex: 1,
});
const Nav = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#333',
  borderBottom: '1px solid #666',
  fontSize: '20px',
  color: 'whitesmoke',
  padding: '1em',
  userSelect: 'none',
  '& h1': {
    display: 'inline',
    fontWeight: 'bold',
    fontSize: '25px',
  },
  '& h2': {
    display: 'inline',
    fontWeight: 'bold',
    fontSize: '16px',
    margin: '0 1em',
    textTransform: 'uppercase',
  },
});
const ChallengeNavigation = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
});
const Buttons = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
  '& button': {
    background: 'none',
    fontSize: '14px',
    padding: '.5em',
    margin: '0 0.3em',
    color: 'whitesmoke',
    border: '1px solid whitesmoke',
    borderRadius: '3px',
    ':disabled': {
      borderColor: '#777',
      color: '#777',
    },
  },
});

const styleTreeToString = tree => {
  if (!tree) return null;

  return tree.reduce(
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
};

class Level extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markup: this.props.markup,
      styles: this.props.styles,
      validator: this.props.validator,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      markup: nextProps.markup,
      styles: nextProps.styles,
    });
  }

  onInputChange = (selector, propertyKey, value) => {
    const styles = this.state.styles.map(rule => {
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

    this.setState({
      styles,
      completed: this.state.validator(styles),
    });
  };

  render() {
    const { markup, styles, completed } = this.state;

    if (!markup || !styles) return null;

    return (
      <Wrapper>
        <Nav>
          <h1>{title}</h1>
          <ChallengeNavigation>
            <h2>
              Challenge {currentLevel + 1} of {levels.length}
            </h2>
            <Buttons>
              <button
                disabled={!hasPreviousLevel}
                onClick={this.gotoPreviousLevel}
              >
                Previous
              </button>
              <button disabled={!hasNextLevel} onClick={this.gotoNextLevel}>
                Next
              </button>
            </Buttons>
          </ChallengeNavigation>
        </Nav>
        <SuccessModal showing={completed} />
        <Editors>
          <StylesEditor
            markup={markup}
            styles={styles}
            onChange={this.onInputChange}
          />
          <MarkupEditor markup={markup} />
        </Editors>
        <Output markup={markup}>Output</Output>
        <style>{styleTreeToString(styles)}</style>
      </Wrapper>
    );
  }
}

export default Level;
