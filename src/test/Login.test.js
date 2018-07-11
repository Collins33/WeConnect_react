import Login from '../components/Login';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';

describe('it renders the login component',()=>{
     const wrapper = shallow(<Login />);
     it('contains divs',()=>{
          expect(wrapper.find('div').length).toEqual(5);
     });

     it('should change state when form is submitted', () => {
          const component = mount(<Login />);
          component.find('form').simulate('submit');
          const instance = component.find(Login).instance();
          expect(instance.state.buttonClicked).toEqual('clicked');
     });
});
