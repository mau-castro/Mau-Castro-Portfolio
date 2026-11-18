import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import ProjectMedia from './ProjectMedia';
import { projectRotation } from '../data/projects';
import { useLanguage } from '../contexts/useLanguage';
import { routes, siteUrl } from '../routes';

const cardsPerPage = 3;
const slidesPerRound = 2;
const slideDelayMs = 4_000;
const groupExitMs = 240;
const groupTransitionStyle = { '--featured-exit-duration': `${groupExitMs}ms` } as CSSProperties;

export default function FeaturedProjects() {
  const { language, t } = useLanguage();
  const [step, setStep] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const remainingTime = useRef(slideDelayMs);
  const visibleCount = Math.min(cardsPerPage, projectRotation.length);
  const canRotateProjects = projectRotation.length > visibleCount;
  const canRotate = canRotateProjects || projectRotation.some(project =>
    project.images.length + (project.cover ? 1 : 0) >= slidesPerRound,
  );
  const round = canRotateProjects ? Math.floor(step / slidesPerRound) : 0;
  const previewIndex = step % slidesPerRound;
  const nextStepChangesGroup = canRotateProjects && previewIndex === slidesPerRound - 1;
  const visibleProjects = Array.from({ length: visibleCount }, (_, index) =>
    projectRotation[(round * visibleCount + index) % projectRotation.length],
  );
  useEffect(() => {
    if (!canRotate || hovered || focused) return;

    const deadline = performance.now() + remainingTime.current;
    const exitTimer = nextStepChangesGroup
      ? window.setTimeout(() => setLeaving(true), Math.max(0, remainingTime.current - groupExitMs))
      : undefined;
    let advanced = false;
    const timer = window.setTimeout(() => {
      advanced = true;
      remainingTime.current = slideDelayMs;
      setLeaving(false);
      setStep(previous => previous + 1);
    }, remainingTime.current);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(exitTimer);
      if (!advanced) remainingTime.current = Math.max(0, deadline - performance.now());
    };
  }, [canRotate, focused, hovered, nextStepChangesGroup, step]);

  return (
    <section id="projects" className="page-wrap featured-section" aria-labelledby="featured-title">
      <div className="section-heading featured-heading">
        <h2 id="featured-title">{t('projects.featured')}</h2>
        <a className="editorial-link" href={siteUrl(routes.projects)}>{t('projects.viewAll')} <span aria-hidden="true">→</span></a>
      </div>

      <div
        onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(true); }}
        onPointerLeave={event => { if (event.pointerType === 'mouse') setHovered(false); }}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={event => {
          if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
        }}
      >
        <div
          key={round}
          className="featured-grid"
          data-rotated={round > 0}
          data-leaving={leaving && !hovered && !focused}
          style={groupTransitionStyle}
        >
          {visibleProjects.map(project => {
            const destination = project.caseStudy?.path ?? `${routes.projects}#project-${project.id}`;
            const summary = project.caseStudy?.summary ?? project.summary ?? project.description;

            return (
              <article key={project.id} className="featured-project">
                <ProjectMedia project={project} previewIndex={previewIndex} />
                <p className="project-category">{t(project.category)}</p>
                <h3><a href={siteUrl(destination)}>{project.title[language]} <span aria-hidden="true">→</span></a></h3>
                <p className="project-description">{summary[language]}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
