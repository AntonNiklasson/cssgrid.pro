const regexes = require('../../utils/regexes')

const challenge = {
  title: 'Row your boat 🚣',
  markup: `<div class="grid">
  <div class="turtle">🐢</div>
  <div class="elephant">🐘</div>
  <div class="dog">🐶</div>
  <div class="shark">🦈</div>
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="turtle">🐢</div>
  <div class="elephant">🐘</div>
  <div class="dog">🐶</div>
  <div class="shark">🦈</div>
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
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
          input: {
            value: '',
            placeholder: '',
            regex: regexes.moreThanOneLengthParameter,
          },
        },
        {
          key: 'grid-template-rows',
          input: {
            value: '',
            placeholder: '',
            regex: regexes.moreThanOneLengthParameter,
          },
        },
      ],
    },
  ],
  introduction: `# Rows & Columns
  You can define the columns in the grid by setting any number of "lengths" as you want in the \`grid-template-columns\` property.
  
  \`\`\`
  grid-template-columns: 100px 200px 100px;
  \`\`\`

  The same goes for \`grid-template-rows\`:
  
  \`\`\`
  grid-template-rows: 100px 200px 100px;
  \`\`\`

  These values are any valid CSS "length" value. Basically anything that describes a distance in some unit. A deeper explanation is available on MDN: [CSS Length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
  `,
}

module.exports = challenge
