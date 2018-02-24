import introduction from './areas-introduction.md'

console.log(introduction)

export default {
  title: 'Areas 💥',
  markup: `<div class="grid">
  <div class="cat">🐈</div>
  <div class="elephant">🐘</div>
  <div class="turtle">🐢</div>
  <div class="dog">🐶</div>
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
          value: '200px auto',
        },
        {
          key: 'grid-template-rows',
          value: '50px auto 50px',
        },
        {
          key: 'grid-template-areas',
          value: '',
          input: {
            regex: /( *"[a-z]+ [a-z]+" *)+/,
          },
        },
      ],
    },
    {
      selector: '.cat',
      properties: [
        {
          key: 'grid-area',
          value: 'header',
        },
        {
          key: 'background',
          value: 'tomato !important',
        },
      ],
    },
    {
      selector: '.elephant',
      properties: [
        {
          key: 'grid-area',
          value: 'sidebar',
        },
        {
          key: 'background',
          value: 'gold !important',
        },
      ],
    },
    {
      selector: '.turtle',
      properties: [
        {
          key: 'grid-area',
          value: 'content',
        },
        {
          key: 'background',
          value: 'greenyellow !important',
        },
      ],
    },
    {
      selector: '.dog',
      properties: [
        {
          key: 'grid-area',
          value: 'footer',
        },
        {
          key: 'background',
          value: 'crimson !important',
        },
      ],
    },
  ],
  introduction,
}
