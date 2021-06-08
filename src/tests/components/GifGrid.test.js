import { shallow } from "enzyme"
import {GifGrid} from '../../components/GifGrid';
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    
    const category = 'Minecraft'

    test('Debe hacer match con el snapshot ', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();

    });

    test('debe mostrar items luego de la respuesta del useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost.cl/img',
            title: 'Titulo'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();

    });
    
})
