const regexes = require('../../../utils/regexes')
const introduction = require('./introduction.md')

export default {
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
  introduction,
}
