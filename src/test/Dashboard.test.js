import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import Dashboard from '../components/Dashboard';

describe('<Dashboard />', () => {
     const wrapper = shallow(<Dashboard />);
     const data = [{
 name: 'collins', contact: '07028484032', location: 'thika', id: 1 
}];
     it('contains divs', () => {
          expect(wrapper.find('div').length).toEqual(1);
     });

     it('changes state when delete button is clicked', () => {
          const componentInstance = wrapper.instance();
          componentInstance.deleteBusiness(1);
          expect(componentInstance.state.buttonClicked).toEqual('clicked');
     });

     it('changes state when delete button is clicked', () => {
          const componentInstance = wrapper.instance();
          componentInstance.updateBusiness(1);
          expect(componentInstance.state.buttonClicked).toEqual('clicked');
     });

     it('changes state data is mapped', () => {
          const componentInstance = wrapper.instance();
          componentInstance.createBusiness(data)
          expect(componentInstance.state.map).toEqual(false);
     });
});
