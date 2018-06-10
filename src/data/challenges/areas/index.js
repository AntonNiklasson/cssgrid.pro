const introduction = require("./areas-introduction.md");

export default {
  title: "Areas 💥",
  markup: `<div class="grid">
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="turtle">🐢</div>
  <div class="dog">🐶</div>
</div>`,
  styles: {
    ".grid": {
      properties: {
        display: {
          value: "grid"
        },
        "grid-template-columns": {
          value: "300px auto"
        },
        "grid-template-rows": {
          value: "200px auto 200px"
        },
        "grid-template-areas": {
          value: "",
          input: {
            regex: /( *"[a-z]+ [a-z]+" *)+/
          }
        }
      }
    },
    ".cat": {
      properties: {
        "grid-area": {
          value: "header"
        }
      }
    },
    ".elephant": {
      properties: {
        "grid-area": {
          value: "sidebar"
        }
      }
    },
    ".turtle": {
      properties: {
        "grid-area": {
          value: "content"
        }
      }
    },
    ".dog": {
      properties: {
        "grid-area": {
          value: "footer"
        }
      }
    }
  },
  introduction
};
