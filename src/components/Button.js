import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import * as glamor from 'glamor';

const Button = glamorous.button(
  {
    borderStyle: 'solid',
    borderRadius: '4px',
    fontSize: 14,
    margin: '0 0.3em',
    padding: '.6em 1em',
    textTransform: 'uppercase',
  },
  ({ theme: { colors }, crazy, disabled, inverted, large, primary }) => {
    if (crazy) {
      return {
        fontSize: 25,
        fontWeight: 'bold',
        border: '2px solid #ffffff66',
        borderRadius: 4,
        boxShadow: '0 10px 10px rgba(0, 0, 0, .3)',
        color: 'white',
        backgroundImage:
          'linear-gradient(80deg, #c90041, #0127ae, forestgreen, #bada55)',
        backgroundSize: '400% 400%',

        animation: `${glamor.css.keyframes({
          from: {
            backgroundPosition: '0% 0%',
          },
          to: {
            backgroundPosition: '100% 0%',
          },
        })} 15s linear infinite alternate`,

        transition: 'all 400ms',
        ':hover': {
          color: '#DDD',
          border: '2px solid white',
        },
      };
    }

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
