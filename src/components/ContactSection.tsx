import { useLanguage } from '../contexts/useLanguage';

const email = 'mauricioyzro@gmail.com';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="page-wrap contact-inner">
        <div>
          <h2 id="contact-title">{t('contact.title')}</h2>
          <a className="contact-email" href={`mailto:${email}`}>{email}</a>
        </div>
        <ul className="contact-links">
          <li><a href="https://github.com/mau-castro" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a></li>
          <li><a href="https://www.linkedin.com/in/mauricio-castrogtz/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a></li>
        </ul>
        <p className="contact-copyright">© {new Date().getFullYear()} {t('name')}</p>
      </div>
    </footer>
  );
};

export default ContactSection;
