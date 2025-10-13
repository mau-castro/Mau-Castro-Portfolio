import { useLanguage } from '../contexts/LanguageContext';

type Category = 'all' | 'fullstack' | 'apis' | 'ia';

interface CategoryTabsProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const CategoryTabs = ({ activeCategory, onCategoryChange }: CategoryTabsProps) => {
  const { t } = useLanguage();

  const categories: Category[] = ['all', 'fullstack', 'apis', 'ia'];

  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1 gap-1">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeCategory === category
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {t(category)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
