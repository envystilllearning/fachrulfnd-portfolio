import Intro from 'components/modules/Intro';
import Projects from 'components/modules/Projects';
import Skills from 'components/modules/Skills';
import UpworkPortfolio from 'components/modules/UpworkPortfolio';
import Contact from 'components/modules/Contact';
import AllProviders from 'components/AllProviders';
import Footer from 'components/ui/theme/Footer';

const HomePage = () => (
  <>
    <AllProviders>
      <Intro />
      <Projects />
      <Skills />
      <UpworkPortfolio />
      <Contact />
      <Footer />
    </AllProviders>
  </>
);

export default HomePage;
