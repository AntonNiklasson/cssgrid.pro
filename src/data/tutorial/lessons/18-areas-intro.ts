import type { LearnLesson } from '../../../types/tutorial';

const lesson: LearnLesson = {
  id: 'areas-intro',
  type: 'learn',
  title: 'Named Grid Areas',
  content: `
# Grid Template Areas

Instead of using line numbers, you can name areas of your grid using \`grid-template-areas\`.

\`\`\`css
.grid {
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}
\`\`\`

Each string represents a row, and each word represents a column.

## Assigning items to areas

\`\`\`css
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

## Rules for grid-template-areas

- Each row must have the same number of columns
- Use \`.\` for empty cells
- Area names must form rectangles (no L-shapes!)
- Area names are case-sensitive

## Why use named areas?

- **Visual**: The CSS looks like your layout
- **Readable**: Easy to understand at a glance
- **Maintainable**: Easy to rearrange
- **Responsive**: Great for media queries
  `,
  demonstration: {
    markup: `<div class="grid">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main Content</div>
  <div class="footer">Footer</div>
</div>`,
    styles: {
      '.grid': {
        properties: {
          'display': { value: 'grid' },
          'grid-template-columns': { value: '200px 1fr' },
          'grid-template-rows': { value: '60px 1fr 40px' },
          'grid-template-areas': { value: '"header header" "sidebar main" "footer footer"' },
          'gap': { value: '10px' },
        },
      },
      '.header': {
        properties: { 'grid-area': { value: 'header' } },
      },
      '.sidebar': {
        properties: { 'grid-area': { value: 'sidebar' } },
      },
      '.main': {
        properties: { 'grid-area': { value: 'main' } },
      },
      '.footer': {
        properties: { 'grid-area': { value: 'footer' } },
      },
    },
    note: 'The CSS template areas literally look like the layout!',
  },
  hints: [],
};

export default lesson;
