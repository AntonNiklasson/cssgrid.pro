import { toString, update } from '../styletree'

describe('styletree', () => {
  describe('toString', () => {
    it('should print something', () => {
      const result = toString([
        {
          selector: '.grid',
          properties: [
            { key: 'display', value: 'grid' },
            { key: 'grid-gap', value: '1fr 1fr' },
          ],
        },
      ])

      expect(result).toBe('.grid { display: grid; grid-gap: 1fr 1fr; }')
    })
  })

  describe('update', () => {
    it('should update a styletree', () => {
      const initialTree = [
        {
          selector: '.grid',
          properties: [{ key: 'display', value: 'block' }],
        },
        {
          selector: '.cat',
          properties: [{ key: 'opacity', value: 1 }],
        },
      ]

      expect(update(initialTree, '.grid', 'display', 'grid')).toEqual([
        { selector: '.grid', properties: [{ key: 'display', value: 'grid' }] },
        { selector: '.cat', properties: [{ key: 'opacity', value: 1 }] },
      ])
    })
  })
})
