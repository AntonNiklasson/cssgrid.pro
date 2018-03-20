import React from "react";
import glamorous from "glamorous";
import * as glamor from "glamor";
import Button from "../../components/Button";
import storage from "../../utils/storage";

const Wrapper = glamorous.div({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  fontSize: 25,
  color: "#333",

  "& .content": {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "6em 3em"
  },

  "& hgroup": {
    margin: "0 0 5em 0",
    textAlign: "center"
  },

  "& h1": {
    fontSize: "3em",
    fontFamily: "Roboto Slab",
    lineHeight: 1.6,
    opacity: 0,
    animation: `${glamor.css.keyframes({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    })} 1000ms 300ms forwards`
  },

  "& .button-container": {
    opacity: 0,
    animation: `${glamor.css.keyframes({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    })} 1500ms 1000ms forwards`
  },

  "& h2": {
    fontSize: ".9em",
    fontWeight: "bold",
    textTransform: "uppercase",

    opacity: 0,
    animation: `${glamor.css.keyframes({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    })} 1500ms 1000ms forwards`
  }
});
const Footer = glamorous.div(({ theme }) => ({
  flex: "0 0 80px",
  display: "flex",
  justifyContent: "space-between",
  padding: "1em 3em",
  textAlign: "center",
  fontSize: 16,

  opacity: 0,
  animation: `${glamor.css.keyframes({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  })} 2000ms 1500ms forwards`,

  "& a": {
    color: theme.colors.primary,
    textDecoration: "none"
  }
}));

class LandingView extends React.Component {
  constructor(props) {
    super(props);

    const storedLevel = storage.getLevel();

    this.state = {
      storedLevel
    };
  }

  handleGoClick = () => {
    this.props.history.push("/challenge/0");
  };

  render() {
    const { storedLevel } = this.state;

    return (
      <Wrapper>
        <div className="content">
          <hgroup>
            <h1>CSSGrid.pro</h1>
            <h2>An Interactive Tutorial</h2>
          </hgroup>
          <div className="button-container">
            <Button crazy onClick={this.handleGoClick}>
              Let's go! 🚀
            </Button>
          </div>
          {typeof storedLevel === "number" && (
            <a href={`/challenge/${storedLevel}`}>
              Or continue where you left off...
            </a>
          )}
        </div>
        <Footer>
          <div>
            Made by <a href="http://www.antonniklasson.se">Anton Niklasson</a>
          </div>
          <div>
            <a href="http://github.com/AntonNiklasson/cssgrid.pro">
              github.com/AntonNiklasson/cssgrid.pro
            </a>
          </div>
        </Footer>
      </Wrapper>
    );
  }
}

export default LandingView;
