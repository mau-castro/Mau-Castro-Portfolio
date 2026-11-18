import { useLayoutEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import FeaturedProjects from './components/FeaturedProjects';
import ProjectsPage from './components/ProjectsPage';
import ProjectCasePage from './components/ProjectCasePage';
import ContactSection from './components/ContactSection';
import { sampleProjects } from './data/projects';
import { useLanguage } from './contexts/useLanguage';
import { routes } from './routes';
import { usePortfolioRoute } from './usePortfolioRoute';

function App() {
  const { language, t } = useLanguage();
  const route = usePortfolioRoute();
  const project = sampleProjects.find(item => item.caseStudy?.path === route);
  let title = 'Portfolio';
  let content = <><HeroSection /><FeaturedProjects /></>;

  if (route === routes.projects) {
    title = t('projects.title');
    content = <ProjectsPage />;
  } else if (route === routes.profile) {
    title = t('about.title');
    content = <><AboutSection /><SkillsSection /></>;
  } else if (project?.caseStudy) {
    title = project.title[language];
    content = <ProjectCasePage project={project} study={project.caseStudy} />;
  }

  useLayoutEffect(() => {
    document.title = `${title} | Luis Mauricio Castro`;
  }, [title]);

  return (
    <>
      <a href="#main" className="skip-link">{t('nav.skip')}</a>
      <Header route={route} />

      <main id="main" tabIndex={-1}>{content}</main>

      <ContactSection />
    </>
  );
}

export default App;
