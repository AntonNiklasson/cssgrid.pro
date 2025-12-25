import type { PracticeLesson } from '../../../types/tutorial';

const lesson: PracticeLesson = {
  id: 'fr-units-practice',
  type: 'practice',
  title: 'Using fr Units',
  content: `
# Your Turn: Use fr Units

Create a grid where:
- Columns use \`1fr 4fr\` (sidebar and main content ratio)
- Rows use \`2fr 1fr\` (main area taller than footer)

This is a common layout pattern: a narrow sidebar with a wide main area!

**Your task:** Fill in both properties using fr units.
  `,
  markup: `<div class="grid">
  <div class="turtle">🐢</div>
  <div class="elephant">🐘</div>
  <div class="dog">🐶</div>
  <div class="shark">🦈</div>
</div>`,
  styles: {
    '.grid': {
      properties: {
        'display': { value: 'grid' },
        'grid-template-columns': {
          value: '',
          input: {
            placeholder: '1fr 4fr',
            regex: /^1fr 4fr;?$/,
          },
        },
        'grid-template-rows': {
          value: '',
          input: {
            placeholder: '2fr 1fr',
            regex: /^2fr 1fr;?$/,
          },
        },
      },
    },
  },
  successMessage: `
**Excellent!** You've created a flexible, proportional layout.

This sidebar + main content pattern is incredibly common in web design. The \`fr\` unit makes it easy to create these layouts without calculating exact pixel values!
  `,
  hints: [
    'For columns: 1fr 4fr (1 part sidebar, 4 parts content)',
    'For rows: 2fr 1fr (2 parts top, 1 part bottom)',
    'The fr unit distributes space proportionally',
  ],
};

export default lesson;
