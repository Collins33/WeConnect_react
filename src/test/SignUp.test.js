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
       const signupButton = <button className="btn btn-info form-button" type="submit">SIGN UP</button>;
       expect(wrapper.contains(signupButton)).toBe(true);
    });
    it('contains the signup text',()=>{
        const signupText = <h1 className="text-center">SIGN-UP</h1>;
        expect(wrapper.contains(signupText)).toBe(true);
    });
})