import AddBusiness from '../components/AddBusiness';
import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';


describe('it renders form to add business',()=>{
     const wrapper  = shallow(<AddBusiness />);
     it('shows add business form',()=>{
          expect(wrapper.find('div').length).toEqual(8)
     });

    //  it('should change state when form is submitted', () => {
    //       const instance = wrapper.instance();
    //       const preventDefault = jest.fn();
    //       instance.addBusiness({ preventDefault });
    //  });
   

})