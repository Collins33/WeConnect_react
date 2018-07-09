import SignUp from '../components/Signup';

describe('it renders the signup component',()=>{
    const wrapper = shallow(<SignUp/>);
    
    it('contains the signup form',()=>{
        expect(wrapper.find("form").exists()).toBe(true);
    });
    it('contains the row to hold the form',()=>{
        expect(wrapper.find("div.row").exists()).toBe(true);
    });
    it('contains a button to submit the form',()=>{
        expect(wrapper.find("button").exists()).toBe(true)
    })
})