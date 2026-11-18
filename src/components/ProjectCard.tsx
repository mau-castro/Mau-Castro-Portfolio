import ProjectMedia from './ProjectMedia';
import { useLanguage } from '../contexts/useLanguage';
import type { ProjectCaseStudy } from '../data/projectCases';
import { siteUrl } from '../routes';

export interface Technology {
  name: string;
  color?: string;
}

export interface LocalizedString {
  es: string;
  en: string;
}

export type ProjectCategory = 'fullstack' | 'mobile' | 'apis' | 'ia';

export interface Project {
  id: number;
  title: LocalizedString;
  description: LocalizedString;
  summary?: LocalizedString;
  caseStudy?: ProjectCaseStudy;
  cover?: {
    src: string;
    logo?: string;
    alt: LocalizedString;
  };
  images: string[];
  imageFit?: 'cover' | 'contain';
  technologies: Technology[];
  category: ProjectCategory;
}

const ProjectCard = ({ project }: { project: Project }) => {
  const { language, t } = useLanguage();
  const title = project.title[language];

  return (
    <article className="project-entry" aria-labelledby={`project-${project.id}`}>
      <div className="project-copy">
        <p className="project-category">{t(project.category)}</p>
        <h2 id={`project-${project.id}`}>{title}</h2>
        <p className="project-description">{project.description[language]}</p>
        <ul className="project-stack" aria-label={t('projects.technologies')}>
          {project.technologies.map(tech => <li key={tech.name}>{tech.name}</li>)}
        </ul>
        {project.caseStudy && (
          <a className="editorial-link" href={siteUrl(project.caseStudy.path)} aria-label={`${t('projects.readCase')} · ${title}`}>
            {t('projects.readCase')} <span aria-hidden="true">→</span>
          </a>
        )}
      </div>

      <ProjectMedia project={project} />
    </article>
  );
};

export default ProjectCard;
