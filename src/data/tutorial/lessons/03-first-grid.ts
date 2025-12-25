import type { PracticeLesson } from '../../../types/tutorial';

const lesson: PracticeLesson = {
  id: 'first-grid',
  type: 'practice',
  title: 'Your First Grid',
  content: `
# Your Turn: Create a Grid!

Now it's your turn. Set the \`display\` property to \`grid\` to turn this container into a grid.

Don't worry - it won't look different yet because we haven't defined any columns. But this is the essential first step!

**Your task:** Type \`grid\` in the input field.
  `,
  markup: `<div class="grid">
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="shark">🦈</div>
</div>`,
  styles: {
    '.grid': {
      properties: {
        'display': {
          value: '',
          input: {
            placeholder: 'grid',
            regex: /^grid;?$/,
          },
        },
      },
    },
  },
  successMessage: `
**Great job!** You've created your first grid container.

The items are stacking vertically because we haven't told the grid how many columns to create. That's what we'll learn next!
  `,
  hints: [
    'The value should be exactly: grid',
    'This is the same as setting display: flex, but for grid layouts',
  ],
};

export default lesson;
