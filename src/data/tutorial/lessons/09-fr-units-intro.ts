import type { LearnLesson } from '../../../types/tutorial';

const lesson: LearnLesson = {
  id: 'fr-units-intro',
  type: 'learn',
  title: 'The fr Unit',
  content: `
# Flexible Sizing with fr Units

The \`fr\` unit stands for **"fraction"** and is one of the most powerful features of CSS Grid.

\`\`\`css
grid-template-columns: 1fr 1fr 1fr;
\`\`\`

This creates 3 columns that each take up **1 fraction** of the available space - they're all equal width!

## How fr works

The \`fr\` unit distributes the **remaining space** after fixed-size columns are accounted for.

- \`1fr 1fr\` → Two equal columns (50% each)
- \`1fr 2fr\` → Second column is twice as wide as the first
- \`1fr 1fr 1fr\` → Three equal columns
- \`200px 1fr\` → First column is 200px, second fills the rest

## Why use fr instead of %?

- \`fr\` automatically accounts for gaps
- \`fr\` is more intuitive for proportional layouts
- No need to calculate percentages!

Think of it like slicing a pizza: \`1fr 2fr\` means "give the first column 1 slice and the second column 2 slices."
  `,
  demonstration: {
    markup: `<div class="grid">
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="shark">🦈</div>
</div>`,
    styles: {
      '.grid': {
        properties: {
          'display': { value: 'grid' },
          'grid-template-columns': { value: '1fr 2fr 1fr' },
          'grid-template-rows': { value: '100px' },
        },
      },
    },
    note: 'The middle column is twice as wide as the side columns (1:2:1 ratio)!',
  },
  hints: [],
};

export default lesson;
