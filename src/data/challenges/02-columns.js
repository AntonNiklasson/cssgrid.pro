export default {
  title: 'Create columns!',
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
          value: 'grid',
        },
        {
          key: 'grid-template-columns',
          value: '',
          input: {
            placeholder: '100px 100px',
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
          .properties.find(prop => prop.key === 'grid-template-columns')
          .value === '100px 100px'
      );
    } catch (e) {
      return false;
    }
  },
};
