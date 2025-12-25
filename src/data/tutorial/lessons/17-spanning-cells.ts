import type { LearnLesson } from '../../../types/tutorial';

const lesson: LearnLesson = {
  id: 'spanning-cells',
  type: 'learn',
  title: 'Spanning Multiple Cells',
  content: `
# Spanning Rows and Columns

Items can span multiple cells using the \`span\` keyword or line numbers.

## Using span

\`\`\`css
.header {
  grid-column: span 3; /* span 3 columns */
  grid-row: span 2;    /* span 2 rows */
}
\`\`\`

## Using line numbers

\`\`\`css
.header {
  grid-column: 1 / 4;  /* line 1 to line 4 = 3 columns */
  grid-row: 1 / 3;     /* line 1 to line 3 = 2 rows */
}
\`\`\`

## Shorthand: grid-area

\`\`\`css
.header {
  grid-area: 1 / 1 / 3 / 4;
  /* row-start / col-start / row-end / col-end */
}
\`\`\`

## Using -1 for full span

\`\`\`css
.footer {
  grid-column: 1 / -1; /* span ALL columns */
}
\`\`\`

This is incredibly useful for headers and footers!
  `,
  demonstration: {
    markup: `<div class="grid">
  <div class="header">Header (spans all columns)</div>
  <div class="sidebar">Side</div>
  <div class="main">Main Content</div>
  <div class="footer">Footer (spans all columns)</div>
</div>`,
    styles: {
      '.grid': {
        properties: {
          'display': { value: 'grid' },
          'grid-template-columns': { value: '200px 1fr' },
          'grid-template-rows': { value: '60px 1fr 40px' },
          'gap': { value: '10px' },
        },
      },
      '.header': {
        properties: {
          'grid-column': { value: '1 / -1' },
        },
      },
      '.footer': {
        properties: {
          'grid-column': { value: '1 / -1' },
        },
      },
    },
    note: 'The header and footer span the full width using grid-column: 1 / -1',
  },
  hints: [],
};

export default lesson;
