import type { LearnLesson } from '../../../types/tutorial';

const lesson: LearnLesson = {
  id: 'rows-intro',
  type: 'learn',
  title: 'Defining Rows',
  content: `
# Defining Rows with grid-template-rows

Just like columns, you can explicitly define rows using \`grid-template-rows\`.

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: 200px 200px;
  grid-template-rows: 100px 150px;
}
\`\`\`

This creates a grid with:
- 2 columns (200px each)
- 2 rows (100px and 150px tall)

## Explicit vs Implicit Rows

- **Explicit rows**: Rows you define with \`grid-template-rows\`
- **Implicit rows**: Rows Grid creates automatically to fit extra items

If you have more items than cells you've defined, Grid automatically creates implicit rows!

## Controlling implicit row height

You can control the height of auto-created rows with:
\`\`\`css
grid-auto-rows: 100px;
\`\`\`
  `,
  demonstration: {
    markup: `<div class="grid">
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="shark">🦈</div>
  <div class="turtle">🐢</div>
</div>`,
    styles: {
      '.grid': {
        properties: {
          'display': { value: 'grid' },
          'grid-template-columns': { value: '200px 200px' },
          'grid-template-rows': { value: '80px 120px' },
        },
      },
    },
    note: 'Notice the first row is 80px tall and the second is 120px tall!',
  },
  hints: [],
};

export default lesson;
