const regexes = require('../../../utils/regexes')
const introduction = require('./introduction.md')
const markup = require('./markup.html')

export default {
  title: 'Row your boat 🚣',
  styles: {
    '.grid': {
      properties: {
        display: {
          value: 'grid',
        },
        'grid-template-columns': {
          value: '',
          input: {
            placeholder: '',
            regex: regexes.moreThanOneLengthParameter,
          },
        },
        'grid-template-rows': {
          value: '',
          input: {
            placeholder: '',
            regex: regexes.moreThanOneLengthParameter,
          },
        },
      },
    },
  },
  markup,
  introduction,
}
