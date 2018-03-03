import { toString, update } from '../styletree'

describe('styletree', () => {
  describe('toString', () => {
    it('should print something', () => {
      const result = toString({
        '.grid': {
          properties: {
            display: { value: 'grid' },
            'grid-gap': {
              value: '1fr 1fr',
            },
          },
        },
      })

      expect(result).toBe('.grid { display: grid; grid-gap: 1fr 1fr; }')
    })
  })

  describe('update', () => {
    it('should update a styletree', () => {
      const initialTree = {
        '.grid': {
          properties: { display: { value: 'block', input: { regex: /.*$/ } } },
        },
        '.cat': {
          properties: { display: { value: 'inline', input: { regex: /.*$/ } } },
        },
      }

      expect(update(initialTree, '.grid', 'display', 'grid')).toEqual({
        '.grid': {
          properties: {
            display: {
              value: 'grid',
              input: {
                regex: /.*$/,
              },
            },
          },
        },
        '.cat': {
          properties: {
            display: 'inline',
            input: {
              regex: /.*$/,
            },
          },
        },
      })
    })
  })
})
