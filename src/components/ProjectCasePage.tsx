import ProjectMedia from './ProjectMedia';
import type { Project } from './ProjectCard';
import type { ProjectCaseStudy } from '../data/projectCases';
import { useLanguage } from '../contexts/useLanguage';
import { routes, siteUrl } from '../routes';

const sections = ['problem', 'role', 'result'] as const;

export default function ProjectCasePage({ project, study }: { project: Project; study: ProjectCaseStudy }) {
  const { language, t } = useLanguage();

  return (
    <article className="page-wrap case-page">
      <a className="editorial-link" href={siteUrl(routes.projects)}><span aria-hidden="true">←</span> {t('projects.backToAll')}</a>

      <div className="case-intro">
        <div className="section-heading">
          <p className="project-category">{t(project.category)}</p>
          <h1>{project.title[language]}</h1>
          <p className="project-description">{study.summary[language]}</p>
          <ul className="project-stack" aria-label={t('projects.technologies')}>
            {project.technologies.map(technology => <li key={technology.name}>{technology.name}</li>)}
          </ul>
        </div>
        <ProjectMedia project={project} />
      </div>

      <div className="case-details">
        {sections.map(section => (
          <section key={section} className="case-detail" aria-labelledby={`case-${section}`}>
            <h2 id={`case-${section}`}>{t(`case.${section}`)}</h2>
            <p>{study[section][language]}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
