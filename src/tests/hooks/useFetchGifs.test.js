import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en hook useFetchGifs', () => {
    
    test('Debe retornar el estado inicial ', async() => {
        
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('DOOM') );
        const {data, loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toEqual(true);

    });

    test('debe retornar un arreglo de imagenes y loading en false', async() => {
        
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('DOOM') );
        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toEqual(false);

    });
    
})
