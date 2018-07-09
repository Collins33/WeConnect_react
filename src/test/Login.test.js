import Login from '../components/Login';
import sinon from 'sinon';

describe('it renders the login component',()=>{
    const wrapper = shallow(<Login/>);

    it('contains the weconnect text',()=>{
        const weConnect = <h1 className="text-center title">WeConnect</h1>;
        expect(wrapper.contains(weConnect)).toBe(true);
    });
    it('contains login form', ()=>{
        expect(wrapper.find("form").exists()).toBe(true);
    });
    it('contains the login button', ()=>{
        const loginButton = <button className="btn btn-info form-button" type="submit">Log in</button>;
        expect(wrapper.contains(loginButton)).toBe(true);
    });
})