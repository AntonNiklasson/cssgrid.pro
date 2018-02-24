const regexes = require('../../utils/regexes')

module.exports = {
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
  introduction: `# Position the cat!
  A grid is composed of rows and columns. These form the cells inside the grid.
  But it also has a number of **lines**.

  Three vertical lines, and four horizontal lines gives you a 3x2 grid. It is possible to target these
  lines and insert items in-between them.

  \`\`\`
    1               2                3
  1 ----------------------------------
    |               |                |
    |               |                |
    |               |                |
  2 ----------------------------------
    |               |                |
    |               |                |
    |               |                |
  3 ----------------------------------
    |               |                |
    |               |                |
    |               |                |
  4 ----------------------------------
  \`\`\`

  \`grid-column\` and \`grid-row\` are shorthand properties for \`grid-column-start\`, \`grid-column-end\`, \`grid-row-start\` and \`grid-row-end\`.
  Separate the _starting line_ from the _ending line_ with a \`/\`.

  \`\`\`
  grid-column: A / B;
  grid-row: C / D;
  \`\`\`

  What would the values be for placing the cat in the lower right corner?
  `,
}
