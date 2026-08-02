import Intro from 'components/modules/Intro';
import Experience from 'components/modules/Experience';
import Skills from 'components/modules/Skills';
import CaseStudies from 'components/modules/CaseStudies';
import Contact from 'components/modules/Contact';
import AllProviders from 'components/AllProviders';
import Footer from 'components/ui/theme/Footer';

const HomePage = () => (
  <>
    <AllProviders>
      <Intro />
      <Experience />
      <Skills />
      <CaseStudies />
      <Contact />
      <Footer />
    </AllProviders>
  </>
);

export default HomePage;
