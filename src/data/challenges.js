const challenges = [
  {
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
    title: 'Add some spacing 🌌',
    markup: `<div class="grid">
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="shark">🦈</div>
  <div class="turtle">🐢</div>
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
            value: '50% 50%',
          },
          {
            key: 'border',
            value: '3px solid Gold',
          },
          {
            key: 'grid-gap',
            value: '',
            input: {
              placeholder: '10px',
            },
          },
        ],
      },
      {
        selector: '.cat, .elephant, .shark, .turtle',
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
            .properties.find(prop => prop.key === 'grid-gap').value === '10px'
        );
      } catch (e) {
        return false;
      }
    },
  },
];

export default challenges;
