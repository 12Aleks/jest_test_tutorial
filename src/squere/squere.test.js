const {squere, result} = require('./squere')


describe('squere', () => {

    test('Success', () => {
        expect(squere(2)).toBe(4);
        //resultat mensze czem
        expect(squere(2)).toBeLessThan(5)
        //resultat bolsze  
        expect(squere(2)).toBeGreaterThan(3)
        //resultat nie pustoj
        expect(squere(2)).not.toBeUndefined()

        //perwyj argument object, wtoroj ego metod
        let res = jest.spyOn(Math, 'pow');
        squere(2); 
        //toBeCalledTime - kolliczestwo wyzowow metoda
        expect(res).toBeCalledTimes(1);
    })

    test('Success Not called', () => {
        let res = jest.spyOn(Math, 'pow')
        squere(1)
        expect(res).toBeCalledTimes(0)
    })

    afterEach(() => {
        //czistit nakoplennyje mocki 
        jest.clearAllMocks()
    })

})

