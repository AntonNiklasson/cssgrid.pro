import React, { Component } from "react";
import glamorous from "glamorous";
import {
  flatten,
  every,
  values,
  map,
  has,
  getOr,
  cond,
  T,
  identity,
  eq,
  findIndex,
  get,
  keys,
  pipe,
  size
} from "lodash/fp";
import StylesEditor from "./StylesEditor";
import MarkupEditor from "./MarkupEditor";
import Output from "./Output";
import Button from "../../components/button";
import Modal from "../../components/modal";
import Header from "./Header";
import { trackEvent } from "../../tracking";
import {
  toString as stringifyStyleTree,
  updateTree
} from "../../utils/styletree";

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
const SubmitError = glamorous.div({
  color: "red",
  fontSize: 14,
  textTransform: "uppercase",
  margin: ".5em 0",
  textAlign: "right"
});

const EditorsContainer = glamorous.div({
  flex: 1,
  display: "grid",
  gridTemplateRows: "1fr 1fr",
  gridTemplateColumns: "minmax(600px, 1fr) 1fr",
  gridTemplateAreas: "'styles markup' 'output output'"
});

class ChallengeView extends Component {
  static getDerivedStateFromProps(props, state) {
    const idParam = props.match.params.id;
    const challengeIndex = parseInt(idParam, 10);
    const challenge = challenges[challengeIndex];

    if (state.challengeIndex === challengeIndex) return null;

    const derived = {
      isHelpOpen: true,
      challengeIndex,
      challenge,
      hasSubmitError: false
    };

    return derived;
  }

  constructor(props) {
    super(props);

    this.modalRef = React.createRef();
  }

  state = {
    isHelpOpen: true,
    challengeIndex: null,
    challenge: null,
    hasSubmitError: false
  };

  onStylesChanged = (selector, property, value) => {
    const styles = updateTree(
      { ...this.state.challenge.styles },
      selector,
      property,
      value
    );

    this.setState({
      challenge: {
        ...this.state.challenge,
        styles
      },
      hasSubmitError: false
    });
  };

  onIntroConfirm = () => {
    trackEvent("Intro", "Confirm");
    this.setState({ isHelpOpen: false });
  };

  onHelpClick = () => {
    trackEvent("Help", "Open");
    this.setState({ isHelpOpen: true });
  };

  onLevelSubmit = () => {
    const allFieldsAreValid = pipe(
      values,
      map(
        pipe(
          get("properties"),
          values,
          map(cond([[has("input"), getOr(false, "valid")], [T, identity]]))
        )
      ),
      flatten,
      every(identity)
    )(this.state.challenge.styles);

    if (allFieldsAreValid) {
      trackEvent("Challenge", "Submit", "Success");
      this.gotoNextChallenge();
    } else {
      trackEvent("Challenge", "Submit", "Failure");
      this.setState({ hasSubmitError: true });
    }
  };

  onInputEnter = (selector, property, event) => {
    trackEvent("Challenge", "Input (KeyPress)", "Enter");

    const { challenge: { styles } } = this.state;
    const getProperties = get([selector, "properties"]);
    const inputsInContainer = event.target.parentNode.parentNode.parentNode.querySelectorAll(
      "input"
    );
    const shouldSubmit =
      inputsInContainer[inputsInContainer.length - 1] === event.target;

    if (shouldSubmit) {
      this.onLevelSubmit();
    } else {
      const nextPropertyIndex =
        pipe(getProperties, keys, findIndex(eq(property)))(styles) + 1;
      const nextSelectorIndex = pipe(keys, findIndex(eq(selector)))(styles) + 1;

      if (pipe(getProperties, keys, size)(styles) === nextPropertyIndex) {
        const nextSelector = pipe(keys, get(nextSelectorIndex))(styles);
        const firstProperty = pipe(
          get([nextSelector, "properties"]),
          keys,
          get(0)
        )(styles);

        this.inputRefs[`${nextSelector}${firstProperty}`].focus();
      } else {
        const nextProperty = pipe(getProperties, keys, get(nextPropertyIndex))(
          styles
        );

        this.inputRefs[`${selector}${nextProperty}`].focus();
      }
    }
  };

  gotoNextChallenge = () => {
    const { history } = this.props;
    const { challengeIndex } = this.state;
    const nextChallengeIndex = challengeIndex + 1;
    const nextChallenge = challenges[nextChallengeIndex];

    this.inputRefs = null;

    if (nextChallenge) {
      history.push(`/challenge/${nextChallengeIndex}`);
    } else {
      history.push("/theend");
    }
  };

  inputRefCreator = (selector, property) => node => {
    if (!this.inputRefs) {
      this.inputRefs = {};
    }

    this.inputRefs[`${selector}${property}`] = node;
  };

  render() {
    const { challenge, isHelpOpen, hasSubmitError } = this.state;

    if (!challenge) return null;

    const { title, markup, styles } = challenge;

    return (
      <Wrapper>
        <Header>
          <h1>{title}</h1>
          {hasSubmitError && <SubmitError>That's not right!</SubmitError>}
          <SubmitContainer>
            <Button inverted onClick={this.onHelpClick}>
              ?
            </Button>
            <Button
              aria-label="level-submit"
              large
              primary
              disabled={hasSubmitError}
              onClick={this.onLevelSubmit}
            >
              {hasSubmitError ? "🙅" : "Submit!"}
            </Button>
          </SubmitContainer>
        </Header>
        {!isHelpOpen && (
          <EditorsContainer>
            <StylesEditor
              challengeTitle={title}
              styles={styles}
              onChange={this.onStylesChanged}
              onInputEnter={this.onInputEnter}
              inputRefCreator={this.inputRefCreator}
              hasSubmitError={hasSubmitError}
            />
            <MarkupEditor markup={markup} />
            <Output markup={markup}>Output</Output>
            <style>{stringifyStyleTree(styles)}</style>
          </EditorsContainer>
        )}
        <Modal
          content={challenge.introduction}
          visible={isHelpOpen}
          onConfirm={this.onIntroConfirm}
          confirmLabel="Got it!"
          markdown
          ref={this.modalRef}
        />
      </Wrapper>
    );
  }
}

export default ChallengeView;
