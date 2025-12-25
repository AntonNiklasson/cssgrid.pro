import type { PracticeLesson } from '../../../types/tutorial';

const lesson: PracticeLesson = {
  id: 'areas-practice',
  type: 'practice',
  title: 'Create Named Areas',
  content: `
# Your Turn: Define Grid Areas

Create a classic layout with named areas. The items are already assigned to their area names:
- 🐈 Cat = "header"
- 🐘 Elephant = "sidebar"
- 🐢 Turtle = "content"
- 🐶 Dog = "footer"

**Your task:** Define \`grid-template-areas\` so that:
- Header spans both columns (top)
- Sidebar is on the left, content on the right
- Footer spans both columns (bottom)

*Format: "header header" "sidebar content" "footer footer"*
  `,
  markup: `<div class="grid">
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="turtle">🐢</div>
  <div class="dog">🐶</div>
</div>`,
  styles: {
    '.grid': {
      properties: {
        'display': { value: 'grid' },
        'grid-template-columns': { value: '200px 1fr' },
        'grid-template-rows': { value: '80px 1fr 60px' },
        'gap': { value: '10px' },
        'grid-template-areas': {
          value: '',
          input: {
            placeholder: '"header header" "sidebar content" "footer footer"',
            regex: /^\s*"header\s+header"\s+"sidebar\s+content"\s+"footer\s+footer"\s*;?$/,
          },
        },
      },
    },
    '.cat': {
      properties: { 'grid-area': { value: 'header' } },
    },
    '.elephant': {
      properties: { 'grid-area': { value: 'sidebar' } },
    },
    '.turtle': {
      properties: { 'grid-area': { value: 'content' } },
    },
    '.dog': {
      properties: { 'grid-area': { value: 'footer' } },
    },
  },
  successMessage: `
**Excellent!** You've mastered grid template areas!

This is one of the most powerful features of CSS Grid. Your CSS now visually represents your layout, making it easy to understand and modify.
  `,
  hints: [
    'Each row is wrapped in quotes: "area1 area2"',
    'Rows are separated by spaces',
    'Use: "header header" "sidebar content" "footer footer"',
  ],
};

export default lesson;
