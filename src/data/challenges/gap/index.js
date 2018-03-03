const regexes = require('../../../utils/regexes')
const introduction = require('./introduction.md')

export default {
  title: 'Gaps ',
  markup: `<div class="grid">
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="shark">🦈</div>
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="shark">🦈</div>
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="shark">🦈</div>
</div>`,
  styles: {
    '.grid': {
      properties: {
        display: {
          value: 'grid',
        },
        'grid-template-columns': {
          value: '1fr 1fr 1fr',
        },
        'grid-template-rows': {
          value: '1fr 1fr 1fr',
        },
        'grid-gap': {
          value: '',
          input: {
            placeholder: '',
            regex: regexes.oneOrTwoLengthParameters,
          },
        },
      },
    },
  },
  introduction,
}
