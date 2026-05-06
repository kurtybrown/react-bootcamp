import { describe, expect, test } from 'vitest'
import { add, multiply, substract } from './math.helper';

describe('add', () => {
  test('should add two positive numbers', () => {
    // ! 1. Arrange
    const a = 1
    const b = 2
  
    // ! 2. Act
    const result = add(a,b)
  
    // ! 3. Assert
    expect(result).toBe(a + b)
  
  })
  // test('should add two positive numbers', () => {
  //   // ! 1. Arrange
  //   const a = 1
  //   const b = 2
  
  //   // ! 2. Act
  //   const result = add(a,b)
  
  //   // ! 3. Assert
  //   expect(result).toBe(a + b)
  
  // })
})

describe('substract', () => {

  test('should substract two numbers', () => {
    const a = -5
    const b = -3
    const result = substract(a, b)
    expect(result).toBe(a - b);
  })

  test('should be 0', () => {
    const result = substract(2, 2)
    expect(result).toBe(0)
  })

})

describe('multiply', () => {
  test('should multiply two numbers', () => {
    const result = multiply(5, 4)
    expect(result).toBe(5 * 4)
  })
  test('should get 25', () => {
    const result = multiply(5, 5)
    expect(result).toBe(25)
  })
})


