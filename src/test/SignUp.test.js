import SignUp from '../components/Signup';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount, render } from 'enzyme';
import { stub } from 'sinon';

describe('Signup age component', () => {
     const wrapper = shallow(<SignUp />);
     it('contains div', () => {
          expect(wrapper.find('div').length).toEqual(6);
     });
     it('should change state when form is submitted', () => {
          const component = mount(<SignUp />);
          component.find('form').simulate('submit');
          const instance = component.find(SignUp).instance();
          expect(instance.state.buttonClicked).toEqual('clicked');
     });
});
