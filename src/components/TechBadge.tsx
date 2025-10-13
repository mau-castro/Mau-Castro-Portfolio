interface TechBadgeProps {
  name: string;
  color?: string;
}

const TechBadge = ({ name, color = 'blue' }: TechBadgeProps) => {
  const colorClasses = {
    blue: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
    green: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
    purple: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300',
    yellow: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300',
    red: 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300',
    indigo: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300',
    pink: 'bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300',
    cyan: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-300',
  };

  return (
    <span
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
        colorClasses[color as keyof typeof colorClasses] || colorClasses.blue
      }`}
    >
      {name}
    </span>
  );
};

export default TechBadge;
