import { useLanguage } from '../contexts/useLanguage';
import type { ProjectCategory } from './ProjectCard';

type Category = ProjectCategory | 'all';
const categories: Category[] = ['all', 'fullstack', 'mobile', 'apis', 'ia'];

interface CategoryTabsProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const CategoryTabs = ({ activeCategory, onCategoryChange }: CategoryTabsProps) => {
  const { t } = useLanguage();

  return (
    <div className="project-filters" role="group" aria-label={t('projects.categories')}>
      {categories.map(category => (
        <button
          key={category}
          type="button"
          aria-controls="project-list"
          aria-pressed={activeCategory === category}
          onClick={() => onCategoryChange(category)}
        >
          {t(category)}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
