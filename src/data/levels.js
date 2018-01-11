const levels = [
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
          { key: 'display', value: 'flex' },
          { key: 'justify-content', value: 'center' },
          { key: 'align-items', value: 'center' },
          { key: 'background', value: 'tomato' },
          { key: 'padding', value: '2rem' },
        ],
      },
    ],
  },
];

export default levels;
