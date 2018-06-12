import glamorous from "glamorous";
import * as glamor from "glamor";

export const Wrapper = glamorous.div(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: 25,
  color: "#333",

  "& header": {
    padding: "3em",
    textAlign: "center",

    "& h1": {
      fontSize: 50,
      fontFamily: "Roboto Slab, sans-serif"
    },
    "& h2": {
      fontSize: 24,
      textTransform: "uppercase",
      color: theme.colors.grayDarker,
      margin: "0.5em 0"
    },

    "& .button-container": {
      padding: "1em 0"
    }
  },

  "& .content": {
    width: "90%",
    maxWidth: 800,
    padding: "2em",
    textAlign: "center",
    borderTop: `1px solid ${theme.colors.grayLight}`,

    "& h2": {
      fontWeight: "normal",
      fontSize: 22,

      "& span.big-number": {
        fontWeight: "bold",
        fontSize: "1.3em",
        margin: "0 0.2em",
        verticalAlign: "middle",
        color: theme.colors.primary
      },

      "& span.emoji": {
        fontSize: "1.4em",
        verticalAlign: "middle"
      }
    }
  },

  "& .ciu_embed": {
    margin: "2em 0",
    display: "flex",
    justifyContent: "center",
    opacity: 0,
    animation: `${glamor.css.keyframes({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    })} 3000ms 1000ms forwards`,

    "& iframe": {
      width: "100%"
    }
  }
}));
