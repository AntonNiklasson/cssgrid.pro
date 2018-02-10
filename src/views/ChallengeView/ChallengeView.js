import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import Level from './Level';
import challenges from '../../data/challenges';
import Button from '../../components/Button';
import SuccessModal from './SuccessModal';

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

class ChallengeView extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      challengeIndex: null,
      completed: false,
      challenge: null,
    };
  }

  componentDidMount() {
    this.loadLevel();
  }

  componentWillReceiveProps(nextProps) {
    this.loadLevel(nextProps);
  }

  onChallengeCompleted = () => {
    this.setState({ completed: true });
  };

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

    console.log('loadLevel', challengeIndex);

    this.setState({
      challengeIndex,
      completed: false,
      challenge: challenges[challengeIndex],
    });
  };

  gotoNextChallenge = () => {
    const { props: { history }, state: { challengeIndex } } = this;

    history.push(`/challenge/${challengeIndex + 2}`);
  };

  render() {
    const { challengeIndex, completed, challenge } = this.state;

    if (!challenge) return null;

    const { title, markup, styles, validator } = challenge;
    const hasPreviousLevel = challengeIndex > 0;
    const hasNextLevel = challengeIndex < challenges.length;

    return (
      <Wrapper>
        <Nav>
          <div className="left">
            <h1>{title}</h1>
            <Button large primary>
              Submit Solution!
            </Button>
          </div>
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
          onChallengeCompleted={this.onChallengeCompleted}
          onStylesChanged={this.onStylesChanged}
        />
        <SuccessModal
          showing={completed}
          onNextChallengeClicked={this.gotoNextChallenge}
        />
      </Wrapper>
    );
  }
}

export default ChallengeView;
