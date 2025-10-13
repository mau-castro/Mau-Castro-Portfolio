import type { Project } from '../components/ProjectCard';

// Placeholder images - reemplaza con tus propias imágenes
const placeholderImages = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&h=600&fit=crop',
];

export const sampleProjects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico completa con frontend React, backend Node.js, y base de datos PostgreSQL. Incluye autenticación, pasarela de pago y panel de administración.',
    images: placeholderImages,
    technologies: [
      { name: 'React', color: 'cyan' },
      { name: 'Node.js', color: 'green' },
      { name: 'PostgreSQL', color: 'blue' },
      { name: 'Stripe', color: 'purple' },
    ],
    category: 'fullstack',
  },
  {
    id: 2,
    title: 'API REST Node.js',
    description: 'API REST robusta con autenticación JWT, validación de datos, rate limiting y documentación con Swagger. Incluye endpoints para CRUD completo.',
    images: [placeholderImages[1], placeholderImages[0]],
    technologies: [
      { name: 'Node.js', color: 'green' },
      { name: 'Express', color: 'blue' },
      { name: 'MongoDB', color: 'green' },
      { name: 'JWT', color: 'red' },
    ],
    category: 'apis',
  },
  {
    id: 3,
    title: 'Sistema de Recomendación IA',
    description: 'Sistema de recomendación personalizado usando Machine Learning. Procesa datos de usuarios para generar recomendaciones inteligentes en tiempo real.',
    images: [placeholderImages[2], placeholderImages[1], placeholderImages[0]],
    technologies: [
      { name: 'Python', color: 'yellow' },
      { name: 'TensorFlow', color: 'orange' },
      { name: 'FastAPI', color: 'green' },
      { name: 'Scikit-learn', color: 'blue' },
    ],
    category: 'ia',
  },
  {
    id: 4,
    title: 'App de Gestión de Tareas',
    description: 'Aplicación full stack de productividad con drag & drop, categorías personalizadas, sincronización en tiempo real y notificaciones push.',
    images: placeholderImages,
    technologies: [
      { name: 'React', color: 'cyan' },
      { name: 'Firebase', color: 'yellow' },
      { name: 'Tailwind', color: 'indigo' },
      { name: 'TypeScript', color: 'blue' },
    ],
    category: 'fullstack',
  },
  {
    id: 5,
    title: 'API de Análisis de Sentimientos',
    description: 'API para análisis de sentimientos en redes sociales usando NLP. Procesa texto y retorna análisis emocional con precisión del 90%.',
    images: [placeholderImages[0], placeholderImages[2]],
    technologies: [
      { name: 'Python', color: 'yellow' },
      { name: 'NLTK', color: 'green' },
      { name: 'spaCy', color: 'blue' },
      { name: 'FastAPI', color: 'green' },
    ],
    category: 'ia',
  },
  {
    id: 6,
    title: 'Microservicios GraphQL',
    description: 'Arquitectura de microservicios con GraphQL Federation, Docker y Kubernetes. API escalable y eficiente para aplicaciones enterprise.',
    images: [placeholderImages[1], placeholderImages[0]],
    technologies: [
      { name: 'GraphQL', color: 'pink' },
      { name: 'Node.js', color: 'green' },
      { name: 'Docker', color: 'blue' },
      { name: 'Kubernetes', color: 'indigo' },
    ],
    category: 'apis',
  },
];
