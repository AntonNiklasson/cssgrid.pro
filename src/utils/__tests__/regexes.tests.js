import { moreThanOneLengthParameter } from '../regexes'

describe('Regexes', () => {
  describe('More than one length parameter', () => {
    it('should not match "100px"', () => {
      expect(moreThanOneLengthParameter.test('100px')).toBe(false)
    })

    it('should match "10px 10 px"', () => {
      expect(moreThanOneLengthParameter.test('10px 10 px')).toBe(true)
    })

    it('should match "10px 10px 10px"', () => {
      expect(moreThanOneLengthParameter.test('10px 10px 10px')).toBe(true)
    })

    it('should match "50%  50%"', () => {
      expect(moreThanOneLengthParameter.test('50%  50%')).toBe(true)
    })

    it('should match "1fr 10px"', () => {
      expect(moreThanOneLengthParameter.test('1fr 10px')).toBe(true)
    })

    it('should match "2em .6em"', () => {
      expect(moreThanOneLengthParameter.test('2em .6em')).toBe(true)
    })

    it('should match "-1px -.1%"', () => {
      expect(moreThanOneLengthParameter.test('-1px -.1%')).toBe(true)
    })
  })
})
