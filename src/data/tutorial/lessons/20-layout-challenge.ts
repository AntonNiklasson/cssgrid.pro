import type { PracticeLesson } from '../../../types/tutorial';

const lesson: PracticeLesson = {
  id: 'layout-challenge',
  type: 'practice',
  title: 'Final Challenge',
  content: `
# Final Challenge: Build a Dashboard Layout

Congratulations on making it this far! Let's put everything together.

Create a dashboard layout with:
- A **header** spanning the full width (use \`1 / -1\`)
- A **sidebar** on the left
- **Main content** area on the right
- A **footer** spanning the full width

Use what you've learned about:
- Grid columns and rows
- Gaps
- Line-based placement

**Your task:** Position the header and footer to span all columns!
  `,
  markup: `<div class="grid">
  <div class="header">📊 Dashboard</div>
  <div class="sidebar">🗂️ Menu</div>
  <div class="main">📈 Charts & Data</div>
  <div class="footer">© 2024</div>
</div>`,
  styles: {
    '.grid': {
      properties: {
        'display': { value: 'grid' },
        'grid-template-columns': { value: '200px 1fr' },
        'grid-template-rows': { value: '60px 1fr 40px' },
        'gap': { value: '10px' },
      },
    },
    '.header': {
      properties: {
        'grid-column': {
          value: '',
          input: {
            placeholder: '1 / -1',
            regex: /^ *1 *\/ *-?1 *;?$|^ *1 *\/ *3 *;?$|^ *span +2 *;?$/,
          },
        },
      },
    },
    '.footer': {
      properties: {
        'grid-column': {
          value: '',
          input: {
            placeholder: '1 / -1',
            regex: /^ *1 *\/ *-?1 *;?$|^ *1 *\/ *3 *;?$|^ *span +2 *;?$/,
          },
        },
      },
    },
  },
  successMessage: `
# 🎉 Congratulations!

You've completed the CSS Grid tutorial!

## What you learned:

- ✅ Creating grid containers with \`display: grid\`
- ✅ Defining columns with \`grid-template-columns\`
- ✅ Defining rows with \`grid-template-rows\`
- ✅ Using flexible \`fr\` units
- ✅ Adding gaps between items
- ✅ Placing items with \`grid-column\` and \`grid-row\`
- ✅ Creating named areas with \`grid-template-areas\`

You now have the skills to create complex, responsive layouts with CSS Grid!
  `,
  hints: [
    'Use "1 / -1" to span from the first line to the last',
    'Or "1 / 3" for a 2-column grid',
    'Or "span 2" to span 2 columns',
  ],
};

export default lesson;
