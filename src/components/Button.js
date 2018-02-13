import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Button = glamorous.button(
  {
    borderStyle: 'solid',
    borderRadius: '4px',
    fontSize: 14,
    margin: '0 0.3em',
    padding: '.6em 1em',
    textTransform: 'uppercase',
  },
  ({ theme: { colors }, disabled, inverted, large, primary }) => {
    if (disabled) {
      return {
        color: colors.gray,
        border: `2px solid ${colors.gray}`,
      };
    }
    return {
      background: primary ? colors.primary : 'transparent',
      borderWidth: large ? 4 : 2,
      borderColor: primary
        ? colors.primary
        : inverted ? 'whitesmoke' : colors.grayDarkest,
      color: primary
        ? colors.white
        : inverted ? 'whitesmoke' : colors.grayDarkest,
      fontSize: large ? 20 : 14,
      fontWeight: 'bold',
      transition: 'all 300ms',
      padding: large ? '.4em .8em' : '.6em 1em',

      ':hover': {
        color: primary
          ? colors.grayLightest
          : inverted ? colors.grayLight : colors.gray,
        borderColor: primary
          ? 'none'
          : inverted ? colors.grayLight : colors.gray,
        background: primary ? colors.primaryLight : 'inherit',
      },
    };
  }
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
