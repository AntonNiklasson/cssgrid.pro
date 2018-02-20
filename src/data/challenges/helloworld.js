module.exports = {
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
            placeholder: 'grid',
            regex: /^grid$/,
          },
        },
      ],
    },
  ],
};
