import React from 'react';
import glamorous from 'glamorous';
import StylesEditor from './StylesEditor';
import MarkupEditor from './MarkupEditor';
import Output from './Output';
import levels from '../../data/levels';
import SuccessModal from './SuccessModal';

const Wrapper = glamorous.div({
  flex: 1,
  display: 'flex',
  flexFlow: 'column',
  position: 'relative',
});

const Editors = glamorous.div({
  flex: 1,
  display: 'flex',
});

const OutputContainer = glamorous.div({
  flex: 1,
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
      completed: false,
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
