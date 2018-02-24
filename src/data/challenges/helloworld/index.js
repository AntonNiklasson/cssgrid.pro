export default {
  title: 'Create your first grid! 🤓',
  markup: `<div class="grid">
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="shark">🦈</div>
</div>`,
  styles: [
    {
      selector: '.grid',
      properties: [
        {
          key: 'display',
          value: '',
          input: {
            placeholder: '',
            regex: /^grid$/,
          },
        },
      ],
    },
  ],
  introduction: `
# From Block to Grid

The \`display\` property on a container is what makes it a grid.

\`\`\`
display: grid;
\`\`\`

This doesn't really do anything by itself. The container turns it into a grid, but since there are no columns or rows it looks the same.
  `,
}
