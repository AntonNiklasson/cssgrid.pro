const regexes = require('../../../utils/regexes')

export default {
  title: 'Gaps ',
  markup: `<div class="grid">
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="shark">🦈</div>
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="shark">🦈</div>
</div>`,
  styles: [
    {
      selector: '.grid',
      properties: [
        {
          key: 'display',
          value: 'grid',
        },
        {
          key: 'grid-template-columns',
          value: '100px 100px',
        },
        {
          key: 'grid-gap',
          value: '',
          input: {
            placeholder: '10px',
            regex: regexes.oneOrTwoLengthParameters,
          },
        },
      ],
    },
  ],
  introduction: `# Gap Between the Cells 

  CSS Grid supports a super simple way of adding gap. \`grid-gap\` takes any kind of "length" argument.

  \`\`\`
  grid-gap: 10px;
  \`\`\`

  It also works with two parameters:

  \`\`\`
  grid-gap: 100px 30px;
  \`\`\`

  Remember: all of these properties takes what's referred to as a "length". [More on that here](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
  `,
}
