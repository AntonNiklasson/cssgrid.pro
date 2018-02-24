const introduction = require('./lines-introduction.md')

export default {
  title: 'Lines',
  markup: `<div class="grid">
  <div class="cat">🐈</div>
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
          value: '1fr 1fr',
        },
        {
          key: 'grid-template-rows',
          value: '1fr 1fr 1fr',
        },
      ],
    },
    {
      selector: '.cat',
      properties: [
        {
          key: 'grid-column',
          value: '',
          input: {
            regex: /^ *[\d]+( *\/ *[\d]+)? *$/,
          },
        },
        {
          key: 'grid-row',
          value: '',
          input: {
            regex: /^ *[\d]+( *\/ *[\d]+)? *$/,
          },
        },
      ],
    },
  ],
  introduction,
}
