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
  introduction: `# This is the introduction
  Cillum non eiusmod laborum et irure cillum aliquip anim sit nulla sint aliqua. Magna mollit est velit sunt aliqua labore. Est aliquip ipsum ea aute. Qui dolor ipsum minim ea. Ullamco sunt sit Lorem est fugiat tempor anim Lorem. Quis ut adipisicing enim ipsum. Id cillum sit excepteur aute. Sint laboris duis voluptate cillum laborum. Ullamco sint velit labore ex excepteur irure ipsum ex nostrud nostrud. Ipsum in dolore ad est sint aliquip irure sint sint minim. Laboris laborum minim commodo ipsum. Nulla magna veniam sunt adipisicing esse ea incididunt dolore magna sint minim fugiat.`,
}

module.exports = challenge
