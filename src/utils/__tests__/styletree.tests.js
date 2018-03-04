import { toString, updateTree as update } from '../styletree'

describe('styletree', () => {
  describe('toString', () => {
    it('should print something', () => {
      expect(
        toString({
          '.grid': {
            properties: {
              display: { value: 'grid' },
              'grid-gap': {
                value: '1fr 1fr',
              },
            },
          },
          '.cat': {
            properties: {
              background: { value: 'red' },
            },
          },
        })
      ).toBe(
        '.grid { display: grid; grid-gap: 1fr 1fr; } .cat { background: red; }'
      )
    })
  })

  describe('update', () => {
    it('should update a styletree', () => {
      const initialTree = {
        '.grid': {
          properties: {
            display: {
              value: 'block',
              input: {
                regex: /.*$/,
              },
            },
          },
        },
        '.cat': {
          background: {
            value: 'red',
          },
        },
      }
      const updatedTree = {
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
          background: {
            value: 'red',
          },
        },
      }

      expect(update(initialTree, '.grid', 'display', 'grid')).toEqual(
        updatedTree
      )
    })
  })
})
