import { useLanguage } from '../contexts/useLanguage';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="page-wrap profile-section" aria-labelledby="about-title">
      <div className="section-heading">
        <h1 id="about-title">{t('about.title')}</h1>
      </div>
      <div className="profile-copy">
        <p>{t('about.paragraph1')}</p>
        <p>{t('about.paragraph2')}</p>
        <dl className="profile-stats">
          {['experience', 'technologies'].map(stat => (
            <div key={stat}>
              <dt>{t(`about.${stat}Label`)}</dt>
              <dd>{t(`about.${stat}Value`)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default AboutSection;
