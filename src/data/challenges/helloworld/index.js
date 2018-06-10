import introduction from "./helloworld-introduction.md";

export default {
  title: "Create your first grid! 🤓",
  markup: `<div class="grid">
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="shark">🦈</div>
</div>`,
  styles: {
    ".grid": {
      properties: {
        display: {
          value: "",
          input: {
            placeholder: "",
            regex: /^grid;?$/
          }
        }
      }
    }
  },
  introduction
};
