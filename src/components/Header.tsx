import { flushSync } from 'react-dom';
import { useTheme } from '../contexts/useTheme';
import { useLanguage } from '../contexts/useLanguage';
import { routes, siteUrl } from '../routes';
import { animateView } from '../viewTransition';

const Header = ({ route }: { route: string }) => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="site-header">
      <div className="page-wrap header-inner">
        <a className="brand-link" href={route === routes.home ? '#main' : siteUrl()} aria-label={t('nav.home')}>
          <img src={siteUrl('favicon.svg')} alt="" width={36} height={36} />
        </a>

        <nav className="site-nav" aria-label={t('nav.label')}>
          <a href={siteUrl(routes.projects)} aria-current={route === routes.projects ? 'page' : undefined}>{t('projects.title')}</a>
          <a href={siteUrl(routes.profile)} aria-current={route === routes.profile ? 'page' : undefined}>{t('about.title')}</a>
          <a href={siteUrl(`${routes.profile}#skills`)}>{t('skills.title')}</a>
          <a className="nav-contact" href="#contact">{t('nav.contact')}</a>
        </nav>

        <div className="header-actions">
          <button type="button" className="locale-control" onClick={() => animateView('language', () => flushSync(toggleLanguage))} aria-label={t('changeLanguage')} title={t('changeLanguage')}>
            <span className={language === 'es' ? 'current-locale' : ''}>ES</span>
            <span aria-hidden="true">/</span>
            <span className={language === 'en' ? 'current-locale' : ''}>EN</span>
          </button>
          <button type="button" className="theme-control" onClick={() => animateView('theme', () => flushSync(toggleTheme))} aria-label={t('changeTheme')} title={t('changeTheme')} aria-pressed={theme === 'dark'}>
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
              {theme === 'dark'
                ? <path d="M12 2.5v2m0 15v2m9.5-9.5h-2m-15 0h-2m16.22-6.72L17.3 6.7M6.7 17.3l-1.42 1.42m13.44 0L17.3 17.3M6.7 6.7 5.28 5.28M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                : <path d="M20.7 15.1A8.75 8.75 0 0 1 8.9 3.3a8.75 8.75 0 1 0 11.8 11.8Z" />}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
