import BusinessDetails from '../components/BusinessDetails';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount, render } from 'enzyme';


describe('<BusinessDetails />', () => { 
    const wrapper = render(<MemoryRouter href="http://business/2"><BusinessDetails/></MemoryRouter>);
    
    it('renders business details', () => {
        expect(shallow(<MemoryRouter initialEntries={['/business/2']}><BusinessDetails /></MemoryRouter>)).toMatchSnapshot();
   });
});

