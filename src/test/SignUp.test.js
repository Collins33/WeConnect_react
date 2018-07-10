import SignUp from '../components/Signup';

describe('it renders the signup component',()=>{
    const wrapper = shallow(<SignUp/>);
    it('shows signup form',()=>{
        expect(wrapper.find('div').length).toEqual(6);
     });
});
