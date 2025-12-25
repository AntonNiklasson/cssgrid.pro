import type { PracticeLesson } from '../../../types/tutorial';
import { moreThanOneLengthParameter } from '../../../utils/regexes';

const lesson: PracticeLesson = {
  id: 'rows-practice',
  type: 'practice',
  title: 'Create Rows',
  content: `
# Your Turn: Define Rows

Now let's define the rows explicitly. Create a grid with **two rows** - make them any height you like!

**Your task:** Set \`grid-template-rows\` to define two rows.

*Try values like "100px 100px" or "80px 120px"*
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
        'grid-template-columns': { value: '200px 200px' },
        'grid-template-rows': {
          value: '',
          input: {
            placeholder: '100px 100px',
            regex: moreThanOneLengthParameter,
          },
        },
      },
    },
  },
  successMessage: `
**Perfect!** You now have full control over your grid's structure.

With \`grid-template-columns\` and \`grid-template-rows\`, you can create any grid structure you need!
  `,
  hints: [
    'Type two values separated by a space',
    'Each value should be a height like "100px"',
    'Example: 100px 150px',
  ],
};

export default lesson;
