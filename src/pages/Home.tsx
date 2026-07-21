import Hero from '../components/Hero';
import PersonalIntro from '../components/PersonalIntro';
import ResearchInterestsSection from '../components/ResearchInterestsSection';
import Toolkit from '../components/Toolkit';
import FeaturedProjects from '../components/FeaturedProjects';
import RecentExperience from '../components/RecentExperience';
import EducationSection from '../components/EducationSection';
import AwardsSection from '../components/AwardsSection';
import SkillsSection from '../components/SkillsSection';
import InterestsSection from '../components/InterestsSection';
import CTA from '../components/CTA';

const Home = () => (
  <>
    <Hero />
    <PersonalIntro />
    <ResearchInterestsSection />
    <Toolkit />
    <FeaturedProjects />
    <RecentExperience />
    <EducationSection />
    <AwardsSection />
    <SkillsSection />
    <InterestsSection />
    <CTA />
  </>
);

export default Home;
