import type { Project } from '../components/ProjectCard';

// Imágenes de SAVI
import saviImg1 from '../assets/Proyectos/SAVI/Imagen1.png';
import saviImg2 from '../assets/Proyectos/SAVI/Imagen2.png';
import saviImg3 from '../assets/Proyectos/SAVI/imagen3.png';
import saviImg4 from '../assets/Proyectos/SAVI/imagen4.png';
import saviImg5 from '../assets/Proyectos/SAVI/imagen5.png';

// Placeholder images - reemplaza con tus propias imágenes
const placeholderImages = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&h=600&fit=crop',
];

const saviImages = [saviImg1, saviImg2, saviImg3, saviImg4, saviImg5];

export const sampleProjects: Project[] = [
  {
    id: 1,
    title: 'SAVI',
    description: 'Plataforma diseñada como un punto de venta funcional para PYMES y negocios independientes. El sistema incluye un módulo de gestión de inventario y ventas que se actualiza automáticamente en tiempo real conforme se registran las transacciones. Además, cuenta con un sistema de administración de usuarios y roles, permitiendo una gestión eficiente y segura del entorno operativo.',
    images: saviImages,
    technologies: [
      { name: 'React + Vite', color: 'cyan' },
      { name: 'TypeScript', color: 'blue' },
      { name: 'Tailwind CSS', color: 'indigo' },
      { name: 'Python', color: 'yellow' },
      { name: 'FastAPI', color: 'green' },
    ],
    category: 'fullstack',
  },
  {
    id: 2,
    title: 'Company ERP',
    description: 'ERP Interno Modular - Sistema de Gestión Empresarial. Plataforma empresarial escalable desarrollada con arquitectura modular para la gestión integral de procesos organizacionales. Incluye módulo de gestión de proyectos con organización jerárquica (espacios, proyectos, tareas y subtareas), sistema de autenticación y usuarios con gestión completa de permisos por departamento, y servicio de notificaciones integrado con SMTP2GO. Arquitectura técnica con Backend en FastAPI (Python), Frontend en React + TypeScript + Vite + Tailwind CSS, y PostgreSQL como base de datos, desplegado en Render.',
    images: [placeholderImages[1], placeholderImages[0]],
    technologies: [
      { name: 'React + Vite', color: 'cyan' },
      { name: 'TypeScript', color: 'blue' },
      { name: 'Tailwind CSS', color: 'indigo' },
      { name: 'Python', color: 'yellow' },
      { name: 'FastAPI', color: 'green' },
      { name: 'PostgreSQL', color: 'blue' },
    ],
    category: 'fullstack',
  },
  {
    id: 3,
    title: 'Plataforma AEDE',
    description: 'Plataforma web empresarial desarrollada para la Agencia Estatal de Desarrollo Energético (AEDE), diseñada para mostrar a la ciudadania indicadores de energía importantes del Estado de Chihuahua. Integra módulos de registro con códigos QR, verificación de asistencia en tiempo real de eventos y automatizada de eventos de gran escala como el Foro de Energía 2025.',
    images: [placeholderImages[2], placeholderImages[1], placeholderImages[0]],
    technologies: [
      { name: 'React + Vite', color: 'cyan' },
      { name: 'TypeScript', color: 'blue' },
      { name: 'Material-UI', color: 'indigo' },
      { name: 'Python', color: 'yellow' },
      { name: 'FastAPI', color: 'green' },
      { name: 'SQLAlchemy', color: 'red' },
    ],
    category: 'fullstack',
  },

];
