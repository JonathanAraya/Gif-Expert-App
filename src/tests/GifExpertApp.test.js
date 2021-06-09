import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"

describe('Pruebas a componente <GifExpertApp />', () => {
    
    test('Debe hacer match con el snapshot', () => {
        
        const wrapper = shallow(<GifExpertApp />)

        expect(wrapper).toMatchSnapshot();

    })

    test('debe mostrar una lista de categorias', () => {
        
        const categories = ['Minecraft', 'DOOM']
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
})
