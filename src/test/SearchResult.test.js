import sinon from 'sinon';
import { shallow, mount, render } from 'enzyme';
import SearchResults from '../components/SearchResults';

describe('<SearchResults', () => {
     const wrapper = shallow(<SearchResults />);
     const data = [{
          name: 'collins', contact: '07028484032', location: 'thika', id: 1,
     }];

     it('contains divs', () => {
          expect(wrapper.find('div').length).toEqual(9);
     });

     it('changes state data is mapped', () => {
          const componentInstance = wrapper.instance();
          componentInstance.createBusiness(data);
          expect(componentInstance.state.map).toEqual(false);
     });

     it('changes state when noBusinessFound', () => {
          const componentInstance = wrapper.instance();
          componentInstance.showBusinessDetails(1);
          expect(componentInstance.state.foundBusiness).toEqual(true);
     });

     it('should change state when search form is submitted', () => {
          const component = mount(<SearchResults />);
          component.find('form').first().simulate('submit');
          const instance = component.find(SearchResults).instance();
          expect(instance.state.buttonClicked).toEqual('clicked');
     });
});
