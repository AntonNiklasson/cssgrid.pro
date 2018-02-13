import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import Transition from 'react-transition-group/Transition';
import Level from './Level';
import challenges from '../../data/challenges/';
import Button from '../../components/Button';
import SuccessModal from './SuccessModal';
import { Check } from '../../components/Icons';

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
      challengeIndex: null,
      valid: false,
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

  onChallengeCompleted = () => {
    this.setState({ valid: true });
  };

  onStylesChanged = styles => {
    this.setState({
      challenge: {
        ...this.state.challenge,
        styles,
      },
      valid: this.state.challenge.validator(styles),
    });
  };

  loadLevel = (props = this.props) => {
    const idParam = props.match.params.id;
    const challengeIndex = parseInt(idParam, 10) - 1;

    this.setState({
      challengeIndex,
      challenge: challenges[challengeIndex],
      valid: false,
      submitSuccess: false,
    });
  };

  gotoNextChallenge = () => {
    const { props: { history }, state: { challengeIndex } } = this;

    history.push(`/challenge/${challengeIndex + 2}`);
  };

  handleSubmit = () => {
    if (this.state.valid) {
      this.setState({ submitSuccess: true });
    }
  };

  render() {
    const { challengeIndex, valid, challenge, submitSuccess } = this.state;

    if (!challenge) return null;

    const { title, markup, styles, validator } = challenge;
    const hasPreviousLevel = challengeIndex > 0;
    const hasNextLevel = challengeIndex < challenges.length;

    return (
      <Wrapper>
        <Nav>
          <h1>{title}</h1>
          <SubmitContainer>
            <Button large primary onClick={this.handleSubmit}>
              Submit Solution!
            </Button>
            <Transition in={valid} timeout={100}>
              {state => <Check size={25} transitionState={state} />}
            </Transition>
          </SubmitContainer>
          <ChallengeNavigation>
            <Buttons>
              <Button
                disabled={!hasPreviousLevel}
                onClick={this.gotoPreviousLevel}
                inverted
              >
                Previous
              </Button>
              <Button
                disabled={!hasNextLevel}
                onClick={this.gotoNextLevel}
                inverted
              >
                Next
              </Button>
            </Buttons>
          </ChallengeNavigation>
        </Nav>
        <Level
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
