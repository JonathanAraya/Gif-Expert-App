import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GridItem />', () => {

    const title = 'Saludo';
    const url = 'https://localhost.cl/asd'
    const wrapper = shallow( <GifGridItem title={title} url={url}/> )

    test('Debe mostrar el componente correctamente ', () => {
        
        
        expect(wrapper).toMatchSnapshot();

    });
    
    test('debe tener un parrafo con el titulo', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    })

    test('debe tener una imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        //console.log(img.props('src'))

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    
    test('debe tener animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__fadeIn')).toBe(true);

    })
    

});
