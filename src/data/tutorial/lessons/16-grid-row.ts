import type { PracticeLesson } from '../../../types/tutorial';

const lesson: PracticeLesson = {
  id: 'grid-row',
  type: 'practice',
  title: 'Placing Items Vertically',
  content: `
# Positioning with grid-row

Just like \`grid-column\`, the \`grid-row\` property positions items between row lines.

\`\`\`css
.item {
  grid-row: 1 / 3; /* start at row 1, end at row 3 */
}
\`\`\`

**Your task:** Position the cat in a specific cell.

Set both \`grid-column\` and \`grid-row\` to place the cat anywhere in the grid!
  `,
  markup: `<div class="grid">
  <div class="cat">🐈</div>
</div>`,
  styles: {
    '.grid': {
      properties: {
        'display': { value: 'grid' },
        'grid-template-columns': { value: '1fr 1fr' },
        'grid-template-rows': { value: '100px 100px 100px' },
        'gap': { value: '10px' },
      },
    },
    '.cat': {
      properties: {
        'grid-column': {
          value: '',
          input: {
            placeholder: '2',
            regex: /^ *[\d]+( *\/ *[\d]+)? *;?$/,
          },
        },
        'grid-row': {
          value: '',
          input: {
            placeholder: '2',
            regex: /^ *[\d]+( *\/ *[\d]+)? *;?$/,
          },
        },
      },
    },
  },
  successMessage: `
**Great job!** You can now place items anywhere in your grid.

Combining \`grid-column\` and \`grid-row\` gives you precise control over where each item appears.
  `,
  hints: [
    'Try simple values like "1" or "2"',
    'Or use ranges like "1 / 3" to span multiple cells',
    'Experiment with different positions!',
  ],
};

export default lesson;
