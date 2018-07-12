import UpdateBusiness from '../components/updateBusiness';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount, render } from 'enzyme';

describe('Update business page renders', () => {
     const wrapper = render(<MemoryRouter href="http://business/2"><UpdateBusiness /></MemoryRouter>);

     it('renders business update form', () => {
          expect(shallow(<MemoryRouter initialEntries={['/business/2']}><UpdateBusiness /></MemoryRouter>)).toMatchSnapshot();
     });

    //  it('contains divs', () => {
    //       expect(wrapper.find('div').length).toEqual(5);
    //  });
});
