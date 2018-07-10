import Login from '../components/Login';
import sinon from 'sinon';

describe('it renders the login component',()=>{
    const wrapper = shallow(<Login/>);
    it('contains divs',()=>{
        expect(wrapper.find('div').length).toEqual(5);
     });
    it('contains h1',()=>{
        expect(wrapper.find('h1').length).toEqual(2);
    });
    it('contains login form',()=>{
        expect(wrapper.find('form').length).toEqual(1);
    });
    it('contains input field',()=>{
        expect(wrapper.find('input').length).toEqual(2);
    });
    it('contains buttons',()=>{
        expect(wrapper.find('button').length).toEqual(2);
    });
    it('contains paragraphs',()=>{
        expect(wrapper.find('p').length).toEqual(3);
    });
    it('contains link tag',()=>{
        expect(wrapper.find('a').length).toEqual(3);
    });


})