import AddBusiness from '../components/AddBusiness';

describe('it renders form to add business',()=>{
    const wrapper  = shallow(<AddBusiness/>);
    it('shows add business form',()=>{
       expect(wrapper.find('div').length).toEqual(8)
    });
})