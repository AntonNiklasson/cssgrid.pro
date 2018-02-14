module.exports = {
  title: 'Row your boat',
  markup: `<div class="grid">
  <div class="turtle">🐢</div>
  <div class="elephant">🐘</div>
  <div class="dog">🐶</div>
  <div class="shark">🦈</div>
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="turtle">🐢</div>
  <div class="elephant">🐘</div>
  <div class="dog">🐶</div>
  <div class="shark">🦈</div>
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
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
          input: {
            placeholder: '100px 100px',
          },
        },
        {
          key: 'grid-template-rows',
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
          .value === '100px 100px' &&
        styles
          .find(rule => rule.selector === '.grid')
          .properties.find(prop => prop.key === 'grid-template-rows').value ===
          '100px 100px'
      );
    } catch (e) {
      return false;
    }
  },
};
