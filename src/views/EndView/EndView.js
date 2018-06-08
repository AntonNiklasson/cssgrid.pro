import React from "react";
import glamorous from "glamorous";

const Wrapper = glamorous.div({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "white",
  backgroundSize: "cover",
  fontSize: 25,
  color: "#333",
  padding: "5em"
});
const ShareButtons = glamorous.div(() => ({
  maxWidth: 300,
  background: "white",
  margin: "1em",
  padding: "2em",
  borderRadius: 3,
  fontSize: 20,
  textAlign: "center",

  "& h2": {
    color: "#333",
    lineHeight: 1.2,
    marginBottom: 15
  }
}));

const EndView = () => (
  <Wrapper>
    <h1>Good job! 🙏</h1>

    <ShareButtons>
      <h2>Share this with a friend!</h2>

      <a
        className="twitter-share-button"
        href="https://twitter.com/intent/tweet"
      >
        Tweet
      </a>
    </ShareButtons>
  </Wrapper>
);

export default EndView;
