import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import Navbar from '../components/navbar';

describe('<Navbar />', () => {
     const wrapper = shallow(<Navbar />);
     it('contains divs',()=>{
          expect(wrapper.find('div').length).toEqual(3);
     });
});
