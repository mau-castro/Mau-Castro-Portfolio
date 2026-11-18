import { useLanguage } from '../contexts/useLanguage';

const skillGroups = [
  { title: 'skills.frontend', skills: ['React + Vite', 'TypeScript', 'JavaScript', 'CSS / Sass', 'Tailwind CSS'] },
  { title: 'skills.backend', skills: ['Python', 'FastAPI', 'Flask', 'MySQL', 'PostgreSQL', 'scikit-learn'] },
  { title: 'skills.mobile', skills: ['Kotlin', 'Jetpack Compose', 'Wear OS', 'Room'] },
  { title: 'skills.tools', skills: ['Git', 'VS Code', 'Linux', 'Nginx', 'Docker', 'AWS, GCP, Azure'] },
];

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="page-wrap skills-section" aria-labelledby="skills-title">
      <div className="section-heading">
        <h2 id="skills-title">{t('skills.title')}</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map(group => (
          <div key={group.title}>
            <h3>{t(group.title)}</h3>
            <ul>
              {group.skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
