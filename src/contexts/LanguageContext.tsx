import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'es' | 'en';

interface Translations {
  es: Record<string, string>;
  en: Record<string, string>;
}

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Translations = {
  es: {
    // Header
    name: 'Luis Mauricio Castro',
    
    // Hero Section
    'hero.greeting': '¡Hola! Soy',
    'hero.title': 'Desarrollador Full Stack',
    'hero.description': 'Apasionado por crear experiencias web excepcionales y soluciones tecnológicas innovadoras. Especializado en desarrollo frontend y backend con tecnologías modernas.',
    'hero.viewProjects': 'Ver Proyectos',
    'hero.contact': 'Contactar',
    
    // About Section
    'about.title': 'Sobre Mí',
    'about.paragraph1': 'Soy un desarrollador full stack con experiencia en la creación de aplicaciones web modernas y escalables. Me encanta transformar ideas en productos digitales que resuelvan problemas reales.',
    'about.paragraph2': 'Con un enfoque en la calidad del código y las mejores prácticas, trabajo constantemente en mejorar mis habilidades y mantenerme actualizado con las últimas tecnologías del ecosistema web.',
    'about.paragraph3': 'Cuando no estoy programando, disfruto aprender nuevas tecnologías, contribuir a proyectos open source y compartir conocimiento con la comunidad de desarrolladores.',
    'about.stat1Value': '3+',
    'about.stat1Label': 'Años de Experiencia',
    'about.stat2Value': '20+',
    'about.stat2Label': 'Proyectos Completados',
    'about.stat3Value': '10+',
    'about.stat3Label': 'Tecnologías',
    
    // Skills Section
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Tecnologías y herramientas con las que trabajo',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Herramientas',
    'skills.learning': 'Siempre aprendiendo:',
    
    // Projects Section
    'projects.title': 'Mis Proyectos',
    'projects.subtitle': 'Una selección de mis trabajos más recientes',
    
    // Contact Section
    'contact.title': '¡Trabajemos Juntos!',
    'contact.subtitle': 'Estoy siempre abierto a nuevas oportunidades y colaboraciones. ¡No dudes en contactarme!',
    'contact.rights': 'Todos los derechos reservados.',
    'contact.built': 'Construido con',
    
    // Tabs
    all: 'Todos',
    fullstack: 'Full Stack',
    apis: 'APIs',
    ia: 'IA',
    
    // Tooltips
    changeTheme: 'Cambiar tema',
    changeLanguage: 'Cambiar idioma',
  },
  en: {
    // Header
    name: 'Luis Mauricio Castro',
    
    // Hero Section
    'hero.greeting': 'Hi! I\'m',
    'hero.title': 'Full Stack Developer',
    'hero.description': 'Passionate about creating exceptional web experiences and innovative technological solutions. Specialized in frontend and backend development with modern technologies.',
    'hero.viewProjects': 'View Projects',
    'hero.contact': 'Contact Me',
    
    // About Section
    'about.title': 'About Me',
    'about.paragraph1': 'I\'m a full stack developer with experience in building modern and scalable web applications. I love transforming ideas into digital products that solve real problems.',
    'about.paragraph2': 'With a focus on code quality and best practices, I constantly work on improving my skills and staying up to date with the latest technologies in the web ecosystem.',
    'about.paragraph3': 'When I\'m not coding, I enjoy learning new technologies, contributing to open source projects, and sharing knowledge with the developer community.',
    'about.stat1Value': '3+',
    'about.stat1Label': 'Years of Experience',
    'about.stat2Value': '20+',
    'about.stat2Label': 'Completed Projects',
    'about.stat3Value': '10+',
    'about.stat3Label': 'Technologies',
    
    // Skills Section
    'skills.title': 'Skills',
    'skills.subtitle': 'Technologies and tools I work with',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools',
    'skills.learning': 'Always learning:',
    
    // Projects Section
    'projects.title': 'My Projects',
    'projects.subtitle': 'A selection of my most recent work',
    
    // Contact Section
    'contact.title': 'Let\'s Work Together!',
    'contact.subtitle': 'I\'m always open to new opportunities and collaborations. Feel free to reach out!',
    'contact.rights': 'All rights reserved.',
    'contact.built': 'Built with',
    
    // Tabs
    all: 'All',
    fullstack: 'Full Stack',
    apis: 'APIs',
    ia: 'AI',
    
    // Tooltips
    changeTheme: 'Change theme',
    changeLanguage: 'Change language',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'es';
  });

  const toggleLanguage = () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
