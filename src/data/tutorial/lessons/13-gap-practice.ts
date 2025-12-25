import type { PracticeLesson } from '../../../types/tutorial';
import { oneOrTwoLengthParameters } from '../../../utils/regexes';

const lesson: PracticeLesson = {
  id: 'gap-practice',
  type: 'practice',
  title: 'Add Spacing',
  content: `
# Your Turn: Add Gaps

Add spacing between the grid items. You can use:
- A single value: \`20px\` (same gap for rows and columns)
- Two values: \`10px 20px\` (row-gap column-gap)

**Your task:** Add a gap between the grid items.
  `,
  markup: `<div class="grid">
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="shark">🦈</div>
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="shark">🦈</div>
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="shark">🦈</div>
</div>`,
  styles: {
    '.grid': {
      properties: {
        'display': { value: 'grid' },
        'grid-template-columns': { value: '1fr 1fr 1fr' },
        'grid-template-rows': { value: '1fr 1fr 1fr' },
        'gap': {
          value: '',
          input: {
            placeholder: '10px',
            regex: oneOrTwoLengthParameters,
          },
        },
      },
    },
  },
  successMessage: `
**Nice work!** Gaps are one of the best features of CSS Grid.

Unlike margins, gaps are predictable and don't collapse. They work seamlessly with flexible \`fr\` units too!
  `,
  hints: [
    'Try a simple value like "10px" or "20px"',
    'You can also use two values like "10px 20px"',
    'The first value is row-gap, the second is column-gap',
  ],
};

export default lesson;
