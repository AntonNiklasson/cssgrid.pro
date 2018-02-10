import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Button = glamorous.button(
  {
    margin: '0 0.3em',
    background: 'transparent',
    border: '2px solid whitesmoke',
    borderRadius: '4px',
    textTransform: 'uppercase',
    transition: 'all 300ms',
  },
  ({ theme, inverted, large, primary }) => ({
    fontSize: large ? 18 : 12,
    padding: large ? '.4em .8em' : '.6em 1em',
    color: primary
      ? theme.colors.primary
      : inverted ? 'whitesmoke' : theme.colors.grayDarkest,
    borderColor: primary
      ? theme.colors.primary
      : inverted ? 'whitesmoke' : theme.colors.grayDarkest,

    ':hover': {
      color: primary ? theme.colors.primaryLight : theme.colors.gray,
      borderColor: primary ? theme.colors.primaryLight : theme.colors.gray,
    },
  })
);

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  primary: false,
};

export default Button;
