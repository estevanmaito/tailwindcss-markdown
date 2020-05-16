const myLib = require('../src/index')

describe('mylib says', () => {
  describe('sayHi', () => {
    it('should be a string', () => {
      expect(typeof myLib.sayHi).toBe('string')
    })

    it('should return `Hi`', () => {
      expect(myLib.sayHi).toBe('Hi')
    })
  })

  describe('sayBye', () => {
    it('should be a string', () => {
      expect(typeof myLib.sayBye).toBe('string')
    })
  })

  describe('sing', () => {
    it('should return a string', () => {
      expect(typeof myLib.sing()).toBe('string')
    })
  })

  describe('greeting', () => {
    it('should greeting given a name', () => {
      expect(myLib.greeting('Estevan')).toBe('Hello Estevan')
    })
  })
})
