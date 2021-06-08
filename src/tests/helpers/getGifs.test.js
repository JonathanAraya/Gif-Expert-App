import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGigs Fetch', () => {
    
    test('debe traer 10 elementos', async() => {
        
        const gifs = await getGifs('Overwatch');

        expect(gifs.length).toBe(10);

    })

    test('no debe traer elementos', async() => {
        
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);

    })
    
})
 