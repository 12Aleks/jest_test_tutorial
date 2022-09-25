const delay = require('./delay')

describe('delay', () => {
    test('result is true', async () => {
        const sum = await delay(() => 4 + 4, 2000)
        expect(sum).toBe(8)
    })
})