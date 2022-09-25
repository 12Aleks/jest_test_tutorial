const getData = require('./getData');
const axios = require('axios');

//storonie moduli podkluczajutsa dla raboty tak
jest.mock('axios')

describe('axios', () => {
    let response;

    //wypolnajet funkciju pered zapuskom testa - mozet vyzywatsa pered kazdym testom
    //poluczajem w itoge raznyje rezultaty
    beforeEach(() => {
          response = {
            //primer ozydajemych dannych
            data: [ {
                    id: 1,
                    name: "Leanne Graham",
                    username: "Bret",
                    email: "Sincere@april.biz",
                    address: {
                    street: "Kulas Light",
                    suite: "Apt. 556",
                    city: "Gwenborough",
                    zipcode: "92998-3874",
                    geo: {
                    lat: "-37.3159",
                    lng: "81.1496"
                    }
                    },
                    phone: "1-770-736-8031 x56442",
                    website: "hildegard.org",
                    company: {
                    name: "Romaguera-Crona",
                    catchPhrase: "Multi-layered client-server neural-net",
                    bs: "harness real-time e-markets"
                    }
                    },
                    {
                    id: 2,
                    name: "Ervin Howell",
                    username: "Antonette",
                    email: "Shanna@melissa.tv",
                    address: {
                    street: "Victor Plains",
                    suite: "Suite 879",
                    city: "Wisokyburgh",
                    zipcode: "90566-7771",
                    geo: {
                    lat: "-43.9509",
                    lng: "-34.4618"
                    }
                    },
                    phone: "010-692-6593 x09125",
                    website: "anastasia.net",
                    company: {
                    name: "Deckow-Crist",
                    catchPhrase: "Proactive didactic contingency",
                    bs: "synergize scalable supply-chains"
                    }
                    },
                    {
                    id: 3,
                    name: "Clementine Bauch",
                    username: "Samantha",
                    email: "Nathan@yesenia.net",
                    address: {
                    street: "Douglas Extension",
                    suite: "Suite 847",
                    city: "McKenziehaven",
                    zipcode: "59590-4157",
                    geo: {
                    lat: "-68.6102",
                    lng: "-47.0653"
                    }
                    },
                    phone: "1-463-123-4447",
                    website: "ramiro.info",
                    company: {
                    name: "Romaguera-Jacobson",
                    catchPhrase: "Face to face bifurcated interface",
                    bs: "e-enable strategic applications"
                    }
                    }
            ]
          }  
    });

    //wypolnajet funkciju pered zapuskom testa - srabatywajet odin raz
    beforeAll(() => {})


    test('get Data', async() => {
         axios.get.mockReturnValue(response);
         const data = await getData()
         //to czto ozydajem 
         //axios.get wyzowitsa chotiaby raz
         expect(axios.get).toBeCalledTimes(1)

         //rezultat wyzowa getData - masiw strok
         expect(data).toEqual(['1', '2', '3'])

        //formirujet fajl .snap s pravilnymi rezultatami testow, 
        //esli funkcija slomana, mozno po fajlu poniat kakoj rezultat my ozydajem
        expect(data).toMatchSnapshot()
    })
})