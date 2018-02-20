import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import Transition from 'react-transition-group/Transition';
import Challenge from './Challenge';
import challenges from '../../data/challenges/';
import Button from '../../components/Button';
import SuccessModal from './SuccessModal';
import Icon from '../../components/Icon';

const Wrapper = glamorous.div({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});
const Nav = glamorous.div(({ theme }) => ({
  background: theme.colors.grayDarker,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '20px',
  color: 'whitesmoke',
  padding: '1em',
  userSelect: 'none',
  '& h1': {
    margin: '0 0 .2em 0',
    fontSize: '1.5em',
    fontFamily: `'Source Code Pro', 'Roboto', Arial, sans-serif`,
  },
}));
const ChallengeNavigation = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
});
const Buttons = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '10px',
});
const SubmitContainer = glamorous.div({
  position: 'relative',

  '& svg': {
    position: 'absolute',
    right: '-10px',
  },
});

class ChallengeView extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      challenge: null,
      submitSuccess: false,
    };
  }

  componentDidMount() {
    this.loadLevel();
  }

  componentWillReceiveProps(nextProps) {
    this.loadLevel(nextProps);
  }

  onStylesChanged = styles => {
    this.setState({
      challenge: {
        ...this.state.challenge,
        styles,
      },
    });
  };

  loadLevel = (props = this.props) => {
    const idParam = props.match.params.id;
    const challengeIndex = parseInt(idParam, 10) - 1;

    this.setState({
      challenge: challenges[challengeIndex],
      submitSuccess: false,
    });
  };

  gotoNextChallenge = () => {
    const { props: { history }, state: { challengeIndex } } = this;

    history.push(`/challenge/${challengeIndex + 2}`);
  };

  render() {
    const { challenge, submitSuccess } = this.state;

    if (!challenge) return null;

    const { title, markup, styles, validator } = challenge;

    return (
      <Wrapper>
        <Nav>
          <h1>{title}</h1>
          <SubmitContainer>
            <Button large primary onClick={this.handleSubmit}>
              Submit!
            </Button>
          </SubmitContainer>
        </Nav>
        <Challenge
          markup={markup}
          styles={styles}
          validator={validator}
          onStylesChanged={this.onStylesChanged}
        />
        <SuccessModal
          showing={submitSuccess}
          onNextChallengeClicked={this.gotoNextChallenge}
        />
      </Wrapper>
    );
  }
}

export default ChallengeView;
