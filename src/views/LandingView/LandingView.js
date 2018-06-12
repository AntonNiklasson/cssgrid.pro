import React from "react";
import emoji from "node-emoji";
import Button from "../../components/button";
import Footer from "../../components/footer";
import { Wrapper } from "./atoms";

class LandingView extends React.Component {
  handleGoClick = () => {
    this.props.history.push("/challenge/0");
  };

  render() {
    return (
      <Wrapper>
        <header>
          <hgroup>
            <h1>CSSGrid.pro</h1>
            <h2>An Interactive Tutorial</h2>
          </hgroup>
          <div className="button-container">
            <Button crazy onClick={this.handleGoClick}>
              {emoji.emojify("Let's go! :rocket:")}
            </Button>
          </div>
        </header>
        <div className="content">
          <h2>
            About <span className="big-number">84.9%</span> of humans are using
            a browser that supports Grid.
          </h2>
          <div
            className="ciu_embed"
            data-feature="css-grid"
            data-periods="future_1,current,past_1,past_2"
            data-accessible-colours="false"
          >
            <a href="http://caniuse.com/#feat=css-grid">Can I Use css-grid?</a>{" "}
            Data on support for the css-grid feature across the major browsers
            from caniuse.com.
          </div>
        </div>
        <Footer />
      </Wrapper>
    );
  }
}

export default LandingView;
