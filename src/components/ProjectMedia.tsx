import ImageCarousel from './ImageCarousel';
import { useLanguage } from '../contexts/useLanguage';
import type { Project } from './ProjectCard';

export default function ProjectMedia({ project, previewIndex }: { project: Project; previewIndex?: number }) {
  const { language } = useLanguage();
  const cover = project.cover;
  const images = previewIndex === undefined ? project.images : project.images.slice(0, cover ? 1 : 2);

  return (
    <ImageCarousel
      images={images}
      alt={project.title[language]}
      fit={project.imageFit}
      cover={cover && { ...cover, alt: cover.alt[language] }}
      previewIndex={previewIndex}
    />
  );
}
