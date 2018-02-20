const regexes = require('../../utils/regexes')

module.exports = {
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
          },
        },
      ],
    },
  ],
}
