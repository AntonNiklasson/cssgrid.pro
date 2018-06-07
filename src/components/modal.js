import React, { Component } from "react";
import PropTypes from "prop-types";
import Markdown from "react-markdown";
import glamorous from "glamorous";
import Transition from "react-transition-group/Transition";
import Button from "./button";

const Wrapper = glamorous.div(({ transitionState }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "7vh 0",
  pointerEvents: "none",
  background: "#000000CC",

  transition: "opacity 200ms",
  opacity: transitionState === "entered" ? 1 : 0
}));
const Content = glamorous.div(({ transitionState }) => ({
  background: "white",
  width: "80%",
  maxWidth: 700,
  padding: "4em",
  borderRadius: "3px",
  pointerEvents: transitionState === "entered" ? "auto" : "none",
  overflow: "auto",

  "& h1": {
    lineHeight: 2
  },
  "& code": {
    display: "inline-block",
    padding: ".2em"
  },
  "& pre": {
    margin: "1em 0",
    padding: "1em",
    maxWidth: 800,
    whiteSpace: "pre-wrap",
    background: "#EEE"
  },
  "& p": {
    marginBottom: "1em"
  }
}));
const ButtonsContainer = glamorous.div({
  display: "flex",
  justifyContent: "center",
  margin: "4em 0 0 0"
});

class Modal extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    markdown: PropTypes.bool,
    onConfirm: PropTypes.func.isRequired,
    confirmLabel: PropTypes.string,
    visible: PropTypes.bool
  };

  static defaultProps = {
    visible: true,
    markdown: false,
    confirmLabel: "Ok"
  };

  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("keypress", this.onGlobalKeypress);
  }

  componentWillUnmount() {
    window.removeEventListener("keypress", this.onGlobalKeypress);
  }

  onGlobalKeypress = ({ key }) => {
    if (!this.props.visible) return;

    if (["Enter", "Escape"].includes(key)) {
      this.props.onConfirm();
    }
  };

  focus = () => {
    this.wrapperRef.current.focus();
  };

  render() {
    const { visible, markdown, content, onConfirm, confirmLabel } = this.props;

    return (
      <Transition in={visible} timeout={0}>
        {state => (
          <Wrapper transitionState={state} ref={this.wrapperRef}>
            <Content transitionState={state}>
              {markdown ? <Markdown>{content}</Markdown> : content}
              <ButtonsContainer>
                <Button aria-label="modal-button-close" onClick={onConfirm}>
                  {confirmLabel}
                </Button>
              </ButtonsContainer>
            </Content>
          </Wrapper>
        )}
      </Transition>
    );
  }
}

export default Modal;
