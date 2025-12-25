import type { LearnLesson } from '../../../types/tutorial';

const lesson: LearnLesson = {
  id: 'grid-lines-intro',
  type: 'learn',
  title: 'Understanding Grid Lines',
  content: `
# Grid Lines: The Secret to Placement

Every grid has **numbered lines** that you can use to position items precisely.

## How Grid Lines Work

Lines are numbered starting from 1:

\`\`\`
     1    2    3    4  ← column lines
     ↓    ↓    ↓    ↓
   ┌────┬────┬────┐
 1→│    │    │    │
   ├────┼────┼────┤
 2→│    │    │    │
   ├────┼────┼────┤
 3→│    │    │    │
   └────┴────┴────┘
   ↑
   row lines
\`\`\`

A 3-column grid has **4 column lines** (1, 2, 3, 4)
A 3-row grid has **4 row lines** (1, 2, 3, 4)

## Negative line numbers

You can also count from the end:
- \`-1\` = last line
- \`-2\` = second to last
- etc.

This is super useful for spanning to the edge!
  `,
  demonstration: {
    markup: `<div class="grid">
  <div class="a">1</div>
  <div class="b">2</div>
  <div class="c">3</div>
  <div class="d">4</div>
  <div class="e">5</div>
  <div class="f">6</div>
</div>`,
    styles: {
      '.grid': {
        properties: {
          'display': { value: 'grid' },
          'grid-template-columns': { value: '1fr 1fr 1fr' },
          'grid-template-rows': { value: '80px 80px' },
          'gap': { value: '5px' },
        },
      },
    },
    note: 'This grid has column lines 1-4 and row lines 1-3. We\'ll use these to position items!',
    showGridLines: true,
  },
  hints: [],
};

export default lesson;
