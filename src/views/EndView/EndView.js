import React from "react";
import glamorous from "glamorous";
import emoji from "node-emoji";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";
import profilepic from "../../resources/anton.jpg";

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
  padding: "5em",

  "& > h1": {
    fontSize: 50,
    borderBottom: "1px solid #EEE",
    marginBottom: ".5em",
    paddingBottom: ".5em"
  },

  "& > h2": {
    fontSize: 25,
    color: "#333",
    lineHeight: 1.2,
    marginBottom: 15
  },

  "& .buttons": {
    display: "flex",
    background: "white",
    margin: "1em",
    borderRadius: 3,
    fontSize: 20,
    textAlign: "center",

    "& > *": {
      margin: "0 .2em"
    }
  }
});
const AntonCard = glamorous.div({
  marginTop: "3em",
  padding: "2em",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "#EAEAEA",

  "& .content": {
    fontSize: 18
  },

  "& h3": {
    color: "#888",
    fontWeight: "normal"
  },

  "& h2": {
    fontSize: 32,
    margin: "0.3em 0"
  },

  "& img": {
    marginLeft: "2em",
    maxWidth: 180,
    maxHeight: 180,
    borderRadius: "50%",
    border: "2px solid #444",
    boxShadow: "0 5px 5px rgba(0,0,0, .2)"
  }
});

const url = "http://www.cssgrid.pro";

const EndView = () => (
  <Wrapper>
    <h1>
      Good job! {emoji.get("trophy")}
      {emoji.get("+1")}
    </h1>

    <h2>Share this with a friend!</h2>
    <div className="buttons">
      <FacebookShareButton url={url}>
        <FacebookIcon />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon />
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon />
      </LinkedinShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon />
      </TelegramShareButton>
      <EmailShareButton url={url}>
        <EmailIcon />
      </EmailShareButton>
    </div>

    <AntonCard>
      <div className="content">
        <h3>created by</h3>
        <h2>Anton Niklasson</h2>
        <span>
          Talk to me on <a href="http://twitter.com/AntonNiklasson">twitter</a>{" "}
          or <a href="https://t.me/antonniklasson">telegram</a>!
        </span>
      </div>
      <img alt="This is Anton" src={profilepic} />
    </AntonCard>
  </Wrapper>
);

export default EndView;
