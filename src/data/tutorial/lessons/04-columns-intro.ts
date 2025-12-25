import type { LearnLesson } from '../../../types/tutorial';

const lesson: LearnLesson = {
  id: 'columns-intro',
  type: 'learn',
  title: 'Defining Columns',
  content: `
# Defining Columns with grid-template-columns

The \`grid-template-columns\` property defines how many columns your grid has and how wide each column should be.

\`\`\`css
.grid {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
\`\`\`

This creates **3 columns**, each **200px wide**.

## How it works

Each value you add creates a new column:
- \`100px\` → 1 column, 100px wide
- \`100px 200px\` → 2 columns (100px and 200px)
- \`100px 200px 150px\` → 3 columns

## Common units you can use

- **px** - Fixed pixel widths
- **%** - Percentage of container
- **em/rem** - Relative to font size
- **fr** - Fraction of available space (we'll learn this soon!)
- **auto** - Size based on content

Watch how the items automatically flow into the columns!
  `,
  demonstration: {
    markup: `<div class="grid">
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="shark">🦈</div>
  <div class="turtle">🐢</div>
  <div class="dog">🐶</div>
  <div class="bird">🐦</div>
</div>`,
    styles: {
      '.grid': {
        properties: {
          'display': { value: 'grid' },
          'grid-template-columns': { value: '150px 150px 150px' },
        },
      },
    },
    note: 'The 6 items automatically flow into 3 columns, creating 2 rows!',
  },
  hints: [],
};

export default lesson;
