import { useLayoutEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { LanguageContext, type Language } from './useLanguage';

const translations: Record<Language, Record<string, string>> = {
  es: {
    name: 'Luis Mauricio Castro',
    'nav.label': 'Navegación principal',
    'nav.home': 'Inicio del portafolio de Luis Mauricio Castro',
    'nav.skip': 'Saltar al contenido',
    'nav.contact': 'Contacto',
    'hero.title': 'Consultor de inteligencia artificial y desarrollo de software',
    'hero.description': 'Desarrollo sistemas ERP, automatizo procesos internos e integro IA para reducir el trabajo manual y mejorar la eficiencia operativa de las empresas.',
    'hero.viewProjects': 'Ver proyectos',
    'hero.contact': 'Contactar',
    'about.title': 'Sobre mí',
    'about.profileAlt': 'Retrato de Luis Mauricio Castro',
    'about.paragraph1': 'Trabajo de punta a punta en aplicaciones web, desde la interfaz hasta la API y el despliegue. He desarrollado sistemas de gestión y flujos de registro y asistencia para eventos.',
    'about.paragraph2': 'En mis proyectos personales exploro el desarrollo nativo para Android y Wear OS, el procesamiento en el dispositivo y la integración de modelos de IA.',
    'about.experienceValue': '4+',
    'about.experienceLabel': 'Años de experiencia',
    'about.technologiesValue': '20+',
    'about.technologiesLabel': 'Tecnologías',
    'skills.title': 'Tecnologías',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend e IA',
    'skills.mobile': 'Android y Wear OS',
    'skills.tools': 'Herramientas e infraestructura',
    'projects.title': 'Proyectos',
    'projects.featured': 'Proyectos destacados',
    'projects.viewAll': 'Ver todos los proyectos',
    'projects.backToAll': 'Volver a proyectos',
    'projects.readCase': 'Leer caso de estudio',
    'case.problem': 'El problema',
    'case.role': 'Mi rol',
    'case.result': 'Resultado',
    'projects.categories': 'Categorías de proyectos',
    'projects.technologies': 'Tecnologías',
    'projects.empty': 'No hay proyectos en esta categoría',
    'projects.previousImage': 'Imagen anterior',
    'projects.nextImage': 'Imagen siguiente',
    'projects.goToImage': 'Ir a la imagen',
    'contact.title': 'Hablemos.',
    all: 'Todos',
    fullstack: 'Full Stack',
    mobile: 'Móvil',
    apis: 'APIs',
    ia: 'IA',
    changeTheme: 'Cambiar tema',
    changeLanguage: 'Cambiar idioma',
  },
  en: {
    name: 'Luis Mauricio Castro',
    'nav.label': 'Main navigation',
    'nav.home': 'Luis Mauricio Castro’s portfolio home',
    'nav.skip': 'Skip to content',
    'nav.contact': 'Contact',
    'hero.title': 'AI and software development consultant',
    'hero.description': 'I build ERP systems, automate internal workflows, and integrate AI to help companies reduce manual work and operate more efficiently.',
    'hero.viewProjects': 'View projects',
    'hero.contact': 'Get in touch',
    'about.title': 'About me',
    'about.profileAlt': 'Portrait of Luis Mauricio Castro',
    'about.paragraph1': 'I build web applications end to end, from the interface to the API and deployment. I have developed management systems and workflows for event registration and attendance.',
    'about.paragraph2': 'In my personal projects, I explore native development for Android and Wear OS, on-device processing, and AI model integration.',
    'about.experienceValue': '4+',
    'about.experienceLabel': 'Years of experience',
    'about.technologiesValue': '20+',
    'about.technologiesLabel': 'Technologies',
    'skills.title': 'Technologies',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend and AI',
    'skills.mobile': 'Android and Wear OS',
    'skills.tools': 'Tools and infrastructure',
    'projects.title': 'Projects',
    'projects.featured': 'Featured projects',
    'projects.viewAll': 'View all projects',
    'projects.backToAll': 'Back to projects',
    'projects.readCase': 'Read case study',
    'case.problem': 'The problem',
    'case.role': 'My role',
    'case.result': 'Outcome',
    'projects.categories': 'Project categories',
    'projects.technologies': 'Technologies',
    'projects.empty': 'There are no projects in this category',
    'projects.previousImage': 'Previous image',
    'projects.nextImage': 'Next image',
    'projects.goToImage': 'Go to image',
    'contact.title': 'Let’s talk.',
    all: 'All',
    fullstack: 'Full Stack',
    mobile: 'Mobile',
    apis: 'APIs',
    ia: 'AI',
    changeTheme: 'Change theme',
    changeLanguage: 'Change language',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => localStorage.getItem('language') === 'en' ? 'en' : 'es');

  useLayoutEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => setLanguage(previous => previous === 'es' ? 'en' : 'es');
  const t = (key: string) => translations[language][key] ?? key;

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>;
}
