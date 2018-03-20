import React, { Component } from "react";
import glamorous from "glamorous";
import _ from "lodash/fp";
import Challenge from "./Challenge";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Header from "./Header";
import storage from "../../utils/storage";

const challenges = require("../../data/challenges");

const Wrapper = glamorous("div", { displayName: "App" })({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexFlow: "column nowrap"
});
const SubmitContainer = glamorous("div", { displayName: "SubmitContainer" })({
  position: "relative",

  "& svg": {
    position: "absolute",
    right: "-10px"
  }
});

class ChallengeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingIntro: true,
      challengeIndex: null,
      challenge: null
    };
  }

  componentDidMount() {
    this.loadLevel();
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    this.loadLevel(nextProps);
    console.log("componentWillReceiveProps");
  }

  onStylesChanged = styles => {
    this.setState({
      challenge: {
        ...this.state.challenge,
        styles
      }
    });
  };

  showHelpModal = () => {
    this.setState({ showingIntro: true });
    storage.setHelpModalState(true);

    console.log("showHelpModal", storage.setHelpModalState.toString());
  };

  hideHelpModal = () => {
    this.setState({ showingIntro: false });
    storage.setHelpModalState(false);
  };

  gotoNextChallenge = () => {
    const { history } = this.props;
    const { challengeIndex } = this.state;
    const nextChallengeIndex = challengeIndex + 1;
    const nextChallenge = challenges[nextChallengeIndex];

    if (nextChallenge) {
      history.push(`/challenge/${nextChallengeIndex}`);
    } else {
      history.push("/theend");
    }
  };

  loadLevel = (props = this.props) => {
    let { history, match: { params: { id } } } = props;
    let challengeIndex = parseInt(id);
    let challenge = challenges[challengeIndex];
    let progressData = storage.getFieldValues();

    if (!challenge) {
      history.push("/");
      return;
    }

    progressData.forEach(field => {
      challenge = _.set(
        ["styles", field.selector, "properties", field.property, "value"],
        field.value
      )(challenge);
    });

    this.setState({
      challengeIndex,
      challenge,
      showingIntro: storage.getHelpModalState()
    });

    console.log(challengeIndex);
    storage.setLevel(challengeIndex);
  };

  render() {
    const { challenge, showingIntro } = this.state;

    if (!challenge) return null;

    const { title, markup, styles, validator } = challenge;

    return (
      <Wrapper>
        <Header>
          <h1>{title}</h1>
          <SubmitContainer>
            {!showingIntro && (
              <Button inverted onClick={this.showHelpModal}>
                ?
              </Button>
            )}
            <Button large primary onClick={this.gotoNextChallenge}>
              Submit!
            </Button>
          </SubmitContainer>
        </Header>
        <Challenge
          markup={markup}
          styles={styles}
          validator={validator}
          onStylesChanged={this.onStylesChanged}
        />
        <Modal
          content={challenge.introduction}
          visible={showingIntro}
          onConfirm={this.hideHelpModal}
          confirmLabel="Got it."
          markdown
        />
      </Wrapper>
    );
  }
}

export default ChallengeView;
