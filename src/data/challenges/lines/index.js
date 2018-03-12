const introduction = require('./lines-introduction.md')

export default {
  title: 'Lines',
  markup: `<div class="grid">
  <div class="cat">🐈</div>
</div>`,
  styles: {
    '.grid': {
      properties: {
        display: {
          value: 'grid',
        },
        'grid-template-column': {
          value: '1fr 1fr',
        },
        'grid-template-rows': {
          value: '1fr 1fr 1fr',
        },
      },
    },
    '.cat': {
      properties: {
        'grid-column': {
          value: '',
          input: {
            regex: /^ *[\d]+( *\/ *[\d]+)? *$/,
          },
        },
        'grid-row': {
          value: '',
          input: {
            regex: /^ *[\d]+( *\/ *[\d]+)? *$/,
          },
        },
      },
    },
  },
  introduction,
}
