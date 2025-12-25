import type { LearnLesson } from '../../../types/tutorial';

const lesson: LearnLesson = {
  id: 'display-grid',
  type: 'learn',
  title: 'Creating a Grid Container',
  content: `
# Creating a Grid Container

To start using CSS Grid, you need to set the \`display\` property on a container element.

\`\`\`css
.container {
  display: grid;
}
\`\`\`

This tells the browser: "This element is now a grid container, and its direct children are grid items."

## What happens when you set display: grid?

1. The element becomes a **block-level** grid container
2. All direct children become **grid items**
3. Items will stack in a single column by default (until you define columns)

## display: inline-grid

You can also use \`display: inline-grid\` if you want the container itself to behave as an inline element.

**Note:** Just setting \`display: grid\` doesn't change the visual layout much yet. The magic happens when you define columns and rows!
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
        },
      },
    },
    note: 'Notice how the items stack vertically - we haven\'t defined columns yet!',
  },
  hints: [],
};

export default lesson;
