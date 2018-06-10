const emoji = require("node-emoji");
const introduction = require("./introduction.md");

export default {
  title: emoji.emojify("Fractions! :zap:"),
  styles: {
    ".grid": {
      properties: {
        display: {
          value: "grid"
        },
        "grid-template-columns": {
          value: "",
          input: {
            placeholder: "",
            regex: /^1fr 4fr;?$/
          }
        },
        "grid-template-rows": {
          value: "",
          input: {
            placeholder: "",
            regex: /^2fr 1fr;?$/
          }
        }
      }
    }
  },
  markup: `
<div class="grid">
    <div class="turtle">🐢</div>
    <div class="elephant">🐘</div>
    <div class="dog">🐶</div>
    <div class="shark">🦈</div>
  </div>
  `,
  introduction
};
