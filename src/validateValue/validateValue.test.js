const validateValue = require('./validateValue');


test("Test function 'validateValue' completed successfully", () => {
    expect(validateValue(50)).toBe(true)
})

describe('validateValue', () => {
    test('Successfully - equally', () => {
        expect(validateValue(50)).toBe(true)
    })

    test('Not successfully - less ', () => {
        expect(validateValue(-1)).toBe(false)
    })

    test('Not successfully - more', () => {
        expect(validateValue(101)).toBe(false)
    })

    test('Successfull result test - border', () => {
        expect(validateValue(0)).toBe(true)
    })

    test('Successfull result test - border', () => {
        expect(validateValue(100)).toBe(true)
    })
})