import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import Reset from '../components/Reset';

describe('<Reset />',()=>{
    const wrapper = shallow(<Reset />);
    it('contains elements inside divs',()=>{
        expect(wrapper.find('div').length).toEqual(4);
    });

    it('should change state when form is submitted', () => {
          const component = mount(<Reset />);
          component.find('form').simulate('submit');
          const instance = component.find(Reset).instance();
          expect(instance.state.buttonClicked).toEqual('clicked');
   });
})