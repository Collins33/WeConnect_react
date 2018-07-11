import Business from '../components/Business';

describe('it renders the business list',()=>{
     const wrapper = shallow(<Business />);
     it('renders the business list',()=>{
          expect(wrapper.find('div').length).toEqual(1);
     });

     it('should update the state when component mounts',()=>{
          const instance = wrapper.instance();
          expect(wrapper.state('component')).toBe(true);
     })
})