import type { LearnLesson } from '../../../types/tutorial';

const lesson: LearnLesson = {
  id: 'mixing-units',
  type: 'learn',
  title: 'Mixing Units',
  content: `
# Mixing Fixed and Flexible Units

One of Grid's superpowers is combining different units in the same declaration.

\`\`\`css
grid-template-columns: 250px 1fr 1fr;
\`\`\`

This creates:
- A fixed 250px sidebar
- Two flexible columns that split the remaining space

## Common Patterns

**Fixed sidebar with flexible content:**
\`\`\`css
grid-template-columns: 300px 1fr;
\`\`\`

**Holy grail layout:**
\`\`\`css
grid-template-columns: 200px 1fr 200px;
grid-template-rows: auto 1fr auto;
\`\`\`

**Fixed header/footer with flexible content:**
\`\`\`css
grid-template-rows: 60px 1fr 40px;
\`\`\`

## The auto keyword

\`auto\` sizes the track based on its content:
\`\`\`css
grid-template-columns: auto 1fr;
\`\`\`

The first column will be as wide as its content, and the second fills the rest.
  `,
  demonstration: {
    markup: `<div class="grid">
  <div class="sidebar">Sidebar</div>
  <div class="main">Main Content</div>
  <div class="extra">Extra</div>
</div>`,
    styles: {
      '.grid': {
        properties: {
          'display': { value: 'grid' },
          'grid-template-columns': { value: '150px 1fr auto' },
          'grid-template-rows': { value: '100px' },
        },
      },
    },
    note: 'Fixed sidebar (150px) + flexible main + auto-sized extra column',
  },
  hints: [],
};

export default lesson;
