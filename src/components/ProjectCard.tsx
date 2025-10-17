import ImageCarousel from './ImageCarousel';
import TechBadge from './TechBadge';
import { useLanguage } from '../contexts/LanguageContext';

export interface Technology {
  name: string;
  color?: string;
}

export interface LocalizedString {
  es: string;
  en: string;
}

export interface Project {
  id: number;
  title: LocalizedString;
  description: LocalizedString;
  images: string[];
  technologies: Technology[];
  category: 'fullstack' | 'apis' | 'ia';
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { language, t } = useLanguage();
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="grid md:grid-cols-2 gap-6 p-6">
        {/* Image Carousel Section */}
        <div className="h-64 md:h-full min-h-[300px]">
          <ImageCarousel images={project.images} alt={project.title[language]} />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between">
          {/* Title and Description */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {project.title[language]}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.description[language]}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
              {t('projects.technologies')}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <TechBadge key={index} name={tech.name} color={tech.color} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
