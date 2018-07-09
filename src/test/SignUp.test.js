import SignUp from '../components/Signup';

describe('it renders the signup component',()=>{
    const wrapper = shallow(<SignUp/>);
    
    it('contains the signup form',()=>{
        expect(wrapper.find("form").exists()).toBe(true);
    });
})