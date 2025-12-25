import type { PracticeLesson } from '../../../types/tutorial';

const lesson: PracticeLesson = {
  id: 'grid-column',
  type: 'practice',
  title: 'Placing Items Horizontally',
  content: `
# Positioning with grid-column

The \`grid-column\` property positions an item between column lines.

\`\`\`css
.item {
  grid-column: 1 / 3; /* start at line 1, end at line 3 */
}
\`\`\`

## Syntax options:

- \`grid-column: 2\` - Start at line 2
- \`grid-column: 1 / 3\` - From line 1 to line 3
- \`grid-column: 1 / -1\` - Span the full width
- \`grid-column: span 2\` - Span 2 columns

**Your task:** Position the cat to span columns 1 to 3 (the full width).

*Use the format: start / end*
  `,
  markup: `<div class="grid">
  <div class="cat">🐈</div>
</div>`,
  styles: {
    '.grid': {
      properties: {
        'display': { value: 'grid' },
        'grid-template-columns': { value: '1fr 1fr' },
        'grid-template-rows': { value: '100px 100px' },
        'gap': { value: '10px' },
      },
    },
    '.cat': {
      properties: {
        'grid-column': {
          value: '',
          input: {
            placeholder: '1 / 3',
            regex: /^ *1 *\/ *3 *;?$/,
          },
        },
      },
    },
  },
  successMessage: `
**Perfect!** The cat now spans across both columns.

The syntax \`1 / 3\` means "start at column line 1, end at column line 3" - spanning 2 columns!
  `,
  hints: [
    'Use the format: start-line / end-line',
    'To span from line 1 to line 3: 1 / 3',
    'Remember: a 2-column grid has 3 column lines',
  ],
};

export default lesson;
