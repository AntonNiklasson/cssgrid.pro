const levels = [
  {
    title: 'Create your first grid!',
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
              editable: true,
              placeholder: 'grid',
              autofocus: true,
            },
          },
          {
            key: 'grid-template-columns',
            value: '50% 50%',
          },
          {
            key: 'border',
            value: '3px solid Gold',
          },
        ],
      },
      {
        selector: '.cat, .elephant, .shark',
        properties: [
          { key: 'display', value: 'inline-block' },
          { key: 'background', value: 'tomato' },
          { key: 'padding', value: '1rem' },
          { key: 'text-align', value: 'center' },
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
  },
  {
    title: 'Add a gap of 5px!',
    markup: `<div class="grid">
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="shark">🦈</div>
  <div class="dog">🐶</div>
  <div class="turtle">🐢</div>
</div>`,
    styles: [
      {
        selector: '.grid',
        properties: [
          { key: 'display', value: 'grid' },
          { key: 'grid-template-rows', value: '1fr 1fr 1fr', editable: true },
          {
            key: 'grid-template-columns',
            value: '1fr 1fr 1fr',
            editable: true,
          },
          { key: 'grid-gap', value: '', editable: true },
        ],
      },
      {
        selector: '.cat, .elephant, .shark, .dog, .turtle',
        properties: [
          { key: 'background', value: 'tomato' },
          { key: 'padding', value: '1rem' },
          { key: 'text-align', value: 'center' },
        ],
      },
    ],
  },
];

export default levels;
