import { useLanguage } from '../contexts/useLanguage';
import profilePhoto from '../assets/Imagenes/ProfilePhoto.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="page-wrap hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-name">{t('name')}</p>
        <h1 id="hero-title">{t('hero.title')}</h1>
        <p className="hero-description">{t('hero.description')}</p>
        <div className="hero-actions">
          <a className="primary-action" href="#projects">
            {t('hero.viewProjects')}
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14m-6-6 6 6 6-6" />
            </svg>
          </a>
          <a className="text-link" href="#contact">{t('hero.contact')}</a>
        </div>
      </div>

      <div className="hero-portrait">
        <img src={profilePhoto} alt={t('about.profileAlt')} fetchPriority="high" />
      </div>
    </section>
  );
};

export default HeroSection;
