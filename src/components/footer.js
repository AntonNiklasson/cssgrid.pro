import React from "react";
import glamorous from "glamorous";

const FooterContainer = glamorous.div(({ theme }) => ({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
  padding: "1em",
  fontSize: 14,
  background: theme.colors.grayDarker,
  color: "white",

  "& > *": {
    margin: "0 1em"
  },

  "& a": {
    color: theme.colors.primary,
    textDecoration: "none"
  }
}));

const Footer = () => (
  <FooterContainer>
    <div>
      Made by <a href="http://www.antonniklasson.se">Anton Niklasson</a>
    </div>
    <div>
      <a href="http://github.com/AntonNiklasson/cssgrid.pro">
        github.com/AntonNiklasson/cssgrid.pro
      </a>
    </div>
  </FooterContainer>
);

export default Footer;
