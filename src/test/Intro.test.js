import Intro from '../components/Intro';

describe('landing page renders', () => {
     const wrapper = shallow(<Intro />);
     it('shows the website logo', () => {
          expect(shallow(<Intro />).find('h1.text-center').exists()).toBe(true);
     });
     it('renders an explore button', () => {
          expect(shallow(<Intro />).find('button').exists()).toBe(true);
     });
     it('renders business update form', () => {
          expect(shallow(<Intro />)).toMatchSnapshot();
     });
});
