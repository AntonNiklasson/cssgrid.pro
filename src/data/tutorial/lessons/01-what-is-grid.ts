import type { LearnLesson } from '../../../types/tutorial';

const lesson: LearnLesson = {
  id: 'what-is-grid',
  type: 'learn',
  title: 'What is CSS Grid?',
  content: `
# What is CSS Grid?

CSS Grid is a **two-dimensional layout system** designed specifically for building web layouts. Unlike Flexbox which works in one dimension (row OR column), Grid works in **both dimensions simultaneously**.

## Why Grid?

Before Grid, creating complex layouts required:
- Floats and clearfixes
- Table-based layouts
- Complex positioning hacks

Grid gives us a **native, powerful way** to create layouts that were previously difficult or impossible.

## Key Concepts

- **Grid Container**: The parent element with \`display: grid\`
- **Grid Items**: The direct children of the container
- **Grid Lines**: The dividing lines that make up the structure
- **Grid Tracks**: The columns and rows of the grid
- **Grid Cells**: A single unit of the grid
- **Grid Areas**: Rectangular areas spanning multiple cells

Let's see this in action!
  `,
  demonstration: {
    markup: `<div class="grid">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>`,
    styles: {
      '.grid': {
        properties: {
          'display': { value: 'grid' },
          'grid-template-columns': { value: '1fr 1fr 1fr' },
          'grid-template-rows': { value: '100px 100px' },
          'gap': { value: '10px' },
        },
      },
    },
  },
  hints: [],
};

export default lesson;
