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
            placeholder: 'grid',
          },
        },
      ],
    },
  ],
  validator: styles => {
    try {
      return (
        styles
          .find(rule => rule.selector === '.grid')
          .properties.find(prop => prop.key === 'display').value === 'grid'
      );
    } catch (e) {
      return false;
    }
  },
};
