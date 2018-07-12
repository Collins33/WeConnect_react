import Login from '../components/Login';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import App from '../App'

describe('<App/>', ()=>{
     const wrapper = shallow(<App/>);
     it('contains divs',()=>{
          expect(wrapper.find('div').length).toEqual(1);
     });
});
