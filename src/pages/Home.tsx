import Hero from '../components/Hero';
import PersonalIntro from '../components/PersonalIntro';
import Toolkit from '../components/Toolkit';
import FeaturedProjects from '../components/FeaturedProjects';
import RecentExperience from '../components/RecentExperience';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import InterestsSection from '../components/InterestsSection';
import CTA from '../components/CTA';

const Home = () => (
  <>
    <Hero />
    <PersonalIntro />
    <Toolkit />
    <FeaturedProjects />
    <RecentExperience />
    <EducationSection />
    <SkillsSection />
    <InterestsSection />
    <CTA />
  </>
);

export default Home;
