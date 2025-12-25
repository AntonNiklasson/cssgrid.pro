import type { LearnLesson } from '../../../types/tutorial';

const lesson: LearnLesson = {
  id: 'gap-intro',
  type: 'learn',
  title: 'Adding Gaps',
  content: `
# Grid Gaps (Gutters)

The \`gap\` property adds spacing between grid items without affecting the outer edges.

\`\`\`css
.grid {
  display: grid;
  gap: 20px;
}
\`\`\`

## Gap Properties

- **gap** - Sets both row and column gaps
- **row-gap** - Sets only the gap between rows
- **column-gap** - Sets only the gap between columns

\`\`\`css
gap: 10px 20px; /* row-gap column-gap */
gap: 15px;      /* same gap for both */
\`\`\`

## Why use gap instead of margins?

- Gaps only appear **between** items, not on the edges
- No need to worry about margin collapse
- Works perfectly with \`fr\` units
- Cleaner, more intentional spacing

## Legacy syntax

Older browsers may need the prefixed version:
\`\`\`css
grid-gap: 20px; /* older syntax */
gap: 20px;      /* modern syntax */
\`\`\`
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
          'grid-template-columns': { value: '1fr 1fr 1fr' },
          'grid-template-rows': { value: '100px 100px' },
          'gap': { value: '15px' },
        },
      },
    },
    note: 'Notice the consistent spacing between items - but not on the outer edges!',
  },
  hints: [],
};

export default lesson;
