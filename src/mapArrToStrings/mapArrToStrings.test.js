const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToString', () => {

    test("Number to string", () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3'])
    })
    test("Other types", () => {
        expect(mapArrToStrings([1, 2, 3, null, undefined, 'test string'])).toEqual(['1', '2', '3'])
    })

    test("Void", () => {
        expect(mapArrToStrings([])).toEqual([])
    })

    test("Not number", () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3])
    })
})