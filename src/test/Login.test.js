import Login from '../components/Login';

describe('it renders the login component',()=>{
    const wrapper = shallow(<Login/>);
    it('contains the weconnect text',()=>{
        const weConnect = <h1 className="text-center title">WeConnect</h1>;
        expect(wrapper.contains(weConnect)).toBe(true);
    })
})