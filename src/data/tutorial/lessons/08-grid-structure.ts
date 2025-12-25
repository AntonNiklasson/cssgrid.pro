import type { PracticeLesson } from '../../../types/tutorial';
import { moreThanOneLengthParameter } from '../../../utils/regexes';

const lesson: PracticeLesson = {
  id: 'grid-structure',
  type: 'practice',
  title: 'Build a Complete Grid',
  content: `
# Challenge: Build a 3x2 Grid

Let's put it together! Create a grid with:
- **3 columns** (any width)
- **2 rows** (any height)

This will create 6 cells for our 6 animals.

**Your task:** Define both columns and rows.
  `,
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
        'grid-template-columns': {
          value: '',
          input: {
            placeholder: '100px 100px 100px',
            regex: /^(\d+(\.\d+)?(px|em|rem|%|fr|vh|vw)\s+){2}\d+(\.\d+)?(px|em|rem|%|fr|vh|vw);?$/,
          },
        },
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
**Congratulations!** You've built a complete grid structure.

You now understand the two fundamental properties of CSS Grid:
- \`grid-template-columns\` - defines column widths
- \`grid-template-rows\` - defines row heights

Next, we'll learn about flexible sizing with \`fr\` units!
  `,
  hints: [
    'For columns, you need 3 values (e.g., "100px 100px 100px")',
    'For rows, you need 2 values (e.g., "80px 80px")',
    'You can use different widths for each column',
  ],
};

export default lesson;
