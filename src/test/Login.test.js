import Login from '../components/Login';
import sinon from 'sinon';

describe('it renders the login component',()=>{
    const wrapper = shallow(<Login/>);
    it('contains divs',()=>{
        expect(wrapper.find('div').length).toEqual(5);
     });
});
