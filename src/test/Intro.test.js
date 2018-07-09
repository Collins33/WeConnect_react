import Intro from '../components/Intro';

describe('landing page renders',()=>{
    it('shows the website logo', ()=>{
        expect(shallow(<Intro/>).find("h1.text-center").exists()).toBe(true);
    });
});
