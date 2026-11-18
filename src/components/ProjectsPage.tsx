import { useLayoutEffect, useRef, useState } from 'react';
import CategoryTabs from './CategoryTabs';
import ProjectCard, { type ProjectCategory } from './ProjectCard';
import { sampleProjects } from '../data/projects';
import { useLanguage } from '../contexts/useLanguage';

type Category = ProjectCategory | 'all';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [visibleCategory, setVisibleCategory] = useState<Category>('all');
  const { t } = useLanguage();
  const isSwitching = selectedCategory !== visibleCategory;
  const projectList = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isSwitching || !projectList.current) return;

    let isCurrent = true;
    const swapProjects = () => {
      if (isCurrent) setVisibleCategory(selectedCategory);
    };
    const [fade] = projectList.current.getAnimations();
    if (fade) void fade.finished.then(swapProjects, swapProjects);
    else swapProjects();

    return () => { isCurrent = false; };
  }, [isSwitching, selectedCategory]);

  const projects = visibleCategory === 'all'
    ? sampleProjects
    : sampleProjects.filter(project => project.category === visibleCategory);

  return (
    <section id="projects" className="page-wrap catalog-page" aria-labelledby="projects-title">
      <div className="section-heading work-heading">
        <h1 id="projects-title">{t('projects.title')}</h1>
        <CategoryTabs activeCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      </div>

      <div
        id="project-list"
        ref={projectList}
        className="project-list"
        data-switching={isSwitching}
        aria-busy={isSwitching}
        inert={isSwitching}
      >
        {projects.length > 0
          ? projects.map(project => <ProjectCard key={project.id} project={project} />)
          : <p className="empty-projects">{t('projects.empty')}</p>}
      </div>
    </section>
  );
}
