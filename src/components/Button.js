import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Button = glamorous.button(
  {
    background: 'none',
    padding: '.4em .6em',
    margin: '0 0.3em',
    border: '2px solid whitesmoke',
    borderRadius: '3px',
    ':disabled': {
      borderColor: '#777',
      color: '#777',
    },
  },
  ({ primary, inverted, large }) => ({
    fontSize: large ? 23 : 16,
    color: primary ? 'forestgreen' : '#333',
    borderColor: primary ? 'forestgreen' : '#333',
  })

  // return {
  //   color: primary ? 'forestgreen' : 'whitesmoke',
  //   borderColor: primary ? 'forestgreen' : 'whitesmoke',
  // };
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
