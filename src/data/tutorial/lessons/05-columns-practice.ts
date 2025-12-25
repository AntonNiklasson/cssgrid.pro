import type { PracticeLesson } from '../../../types/tutorial';
import { moreThanOneLengthParameter } from '../../../utils/regexes';

const lesson: PracticeLesson = {
  id: 'columns-practice',
  type: 'practice',
  title: 'Create Columns',
  content: `
# Your Turn: Create Columns

Create a grid with **two columns**. Make each column **200px** wide.

**Your task:** Set \`grid-template-columns\` to define two 200px columns.

*Hint: Separate each column width with a space*
  `,
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
        'grid-template-columns': {
          value: '',
          input: {
            placeholder: '200px 200px',
            regex: moreThanOneLengthParameter,
          },
        },
      },
    },
  },
  successMessage: `
**Excellent!** You've created a 2-column grid.

Notice how the 4 items automatically arranged themselves into 2 rows? Grid automatically creates new rows as needed to fit all your items.
  `,
  hints: [
    'Type two values separated by a space',
    'Each value should be a width like "200px"',
    'Example: 200px 200px',
  ],
};

export default lesson;
