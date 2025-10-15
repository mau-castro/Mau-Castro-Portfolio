import type { Project } from '../components/ProjectCard';

// Imágenes de SAVI
import saviImg1 from '../assets/Proyectos/SAVI/Imagen1.png';
import saviImg2 from '../assets/Proyectos/SAVI/Imagen2.png';
import saviImg3 from '../assets/Proyectos/SAVI/imagen3.png';
import saviImg4 from '../assets/Proyectos/SAVI/imagen4.png';
import saviImg5 from '../assets/Proyectos/SAVI/imagen5.png';

// Imágenes de Company ERP
import companyErpImg1 from '../assets/Proyectos/CompanyErp/Imagen1.png';
import companyErpImg2 from '../assets/Proyectos/CompanyErp/Imagen2.png';
import companyErpImg3 from '../assets/Proyectos/CompanyErp/Imagen3.png';
import companyErpImg4 from '../assets/Proyectos/CompanyErp/Imagen4.png';
import companyErpImg5 from '../assets/Proyectos/CompanyErp/Imagen5.png';

// Imágenes de Plataforma AEDE
import aedeImg1 from '../assets/Proyectos/PlataformaAEDE/Imagen1.png';
import aedeImg2 from '../assets/Proyectos/PlataformaAEDE/Imagen2.png';
import aedeImg3 from '../assets/Proyectos/PlataformaAEDE/Imagen3.png';
import aedeImg4 from '../assets/Proyectos/PlataformaAEDE/Imagen4.png';
import aedeImg5 from '../assets/Proyectos/PlataformaAEDE/Imagen5.png';

// Imagen de Platafide
import platafideImg1 from '../assets/Proyectos/Platafide/Imagen1.png';

// Imágenes de ScrapBanco
import scrapBancoImg1 from '../assets/Proyectos/ScrapBanco/Imagen1.png';
import scrapBancoImg2 from '../assets/Proyectos/ScrapBanco/Imagen2.png';

// Imágenes de TumorGrade (Predicción de Gliomas)
import tumorGradeImg1 from '../assets/Proyectos/TumorGrade/Imagen1.png';
import tumorGradeImg2 from '../assets/Proyectos/TumorGrade/Imagen2.png';

// Imágenes del Chatbot LLM + RAG
import chatbotLLMImg1 from '../assets/Proyectos/ChatbotLLM/Imagen1.png';

const saviImages = [saviImg1, saviImg2, saviImg3, saviImg4, saviImg5];
const companyErpImages = [companyErpImg1, companyErpImg2, companyErpImg3, companyErpImg4, companyErpImg5];
const aedeImages = [aedeImg1, aedeImg2, aedeImg3, aedeImg4, aedeImg5];
const platafideImages = [platafideImg1];
const scrapBancoImages = [scrapBancoImg1, scrapBancoImg2];
const tumorGradeImages = [tumorGradeImg1, tumorGradeImg2];
const chatbotLLMImages = [chatbotLLMImg1];

export const sampleProjects: Project[] = [
  {
    id: 1,
    title: 'SAVI',
    description:
      'Plataforma diseñada como un punto de venta funcional para PYMES y negocios independientes. El sistema incluye un módulo de gestión de inventario y ventas que se actualiza automáticamente en tiempo real conforme se registran las transacciones. Además, cuenta con un sistema de administración de usuarios y roles, permitiendo una gestión eficiente y segura del entorno operativo.',
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
    description:
      'ERP Interno Modular - Sistema de Gestión Empresarial. Plataforma empresarial escalable desarrollada con arquitectura modular para la gestión integral de procesos organizacionales. Incluye módulo de gestión de proyectos con organización jerárquica (espacios, proyectos, tareas y subtareas), sistema de autenticación y usuarios con gestión completa de permisos por departamento, y servicio de notificaciones integrado con SMTP2GO. Arquitectura técnica con Backend en FastAPI (Python), Frontend en React + TypeScript + Vite + Tailwind CSS, y PostgreSQL como base de datos, desplegado en Render.',
    images: companyErpImages,
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
    description:
      'Plataforma web empresarial desarrollada para la Agencia Estatal de Desarrollo Energético (AEDE), diseñada para mostrar a la ciudadania indicadores de energía importantes del Estado de Chihuahua. Integra módulos de registro con códigos QR, verificación de asistencia en tiempo real de eventos y automatizada de eventos de gran escala como el Foro de Energía 2025.',
    images: aedeImages,
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
  {
    id: 4,
    title: 'Plataforma Interna Fideapech',
    description:
      'Plataforma web empresarial desarrollada para Fideapech diseñada para automatizar y digitalizar procesos como la automatización de contratos, proceso digital de solicitud de viaticos y vacaciones, gracias a esto se pudo agilizar la entrega de creditos en un 800%. *No se cuentan con más fotografias por temas de privacidad y seguridad de la empresa.',
    images: platafideImages,
    technologies: [
      { name: 'React + Vite', color: 'cyan' },
      { name: 'TypeScript', color: 'blue' },
      { name: 'Material-UI', color: 'indigo' },
      { name: 'Python', color: 'yellow' },
      { name: 'Flask', color: 'green' },
      { name: 'SQLAlchemy', color: 'red' },
    ],
    category: 'fullstack',
  },
  {
    id: 5,
    title: 'Scraping_Bancos_MX',
    description:
      'Librería Python modular para extraer movimientos de estados de cuenta bancarios en PDF y convertirlos en datos estructurados. Procesa automáticamente PDFs de 9 bancos mexicanos (Afirme, BBVA, BanBajío, Banorte, BanRegio, Hey Banco, Inbursa, Santander, Scotiabank) extrayendo tablas y campos clave como fecha, descripción, cargo/abono y saldo. Cada banco tiene su propio módulo adaptable, facilitando la incorporación de nuevos formatos. Utiliza pdfplumber y pymupdf para lectura de PDFs, y pandas para normalización de datos. El resultado es exportable a CSV o integrable en pipelines ETL, reduciendo horas de trabajo manual en conciliación y reporting financiero.',
    images: scrapBancoImages,
    technologies: [
      { name: 'Python', color: 'yellow' },
      { name: 'PDFPlumber', color: 'red' },
      { name: 'PyMuPDF', color: 'green' },
      { name: 'Pandas', color: 'blue' },
      { name: 'ETL', color: 'purple' },
    ],
    category: 'apis',
  },
  {
    id: 6,
    title: 'Predicción de Clasificación de Gliomas (AI/MLOps)',
    description:
      'API y conjunto de prácticas MLOps para la clasificación automática del grado de gliomas (bajo/alto) basada en datos clínicos y mutaciones genéticas. No es una plataforma de usuario completa: el proyecto está pensado como una API reproducible y rastreable que ofrece endpoints para inferencia, gestión de modelos y registro de experimentos. Incluye un pipeline (preprocesamiento, entrenamiento y validación) con MLflow para seguimiento y versionado. Modelos usados: Decision Tree (precisión reportada: 95%), Random Forest y Logistic Regression. La API se implementa con FastAPI y el servicio se empaqueta en Docker para despliegue portátil. Se incorporan pruebas unitarias (ipytest) y prácticas de gobernanza y privacidad (GDPR/CCPA) para manejo seguro de datos clínicos.',
  // Imágenes del proyecto (TumorGrade)
  images: tumorGradeImages,
    technologies: [
      { name: 'Python', color: 'yellow' },
      { name: 'scikit-learn', color: 'green' },
      { name: 'MLflow', color: 'purple' },
      { name: 'FastAPI (API)', color: 'cyan' },
      { name: 'Docker', color: 'blue' },
      { name: 'Decision Tree (95%)', color: 'orange' },
      { name: 'Random Forest', color: 'teal' },
      { name: 'Logistic Regression', color: 'indigo' },
      { name: 'ipytest (unit tests)', color: 'red' },
      { name: 'Governance / GDPR', color: 'gray' },
    ],
    category: 'ia',
  },
  {
    id: 7,
    title: 'Chatbot Especializado en Farmacología (LLM + RAG)',
    description:
      'Sistema conversacional Q&A diseñado para consultar información técnica de farmacología a partir de documentación interna. Implementa una arquitectura Retrieval-Augmented Generation (RAG) que recupera fragmentos relevantes de documentos y los utiliza como contexto para un LLM, asegurando respuestas fundamentadas y reduciendo alucinaciones. El pipeline incluye ingestión y chunking de PDFs, generación de embeddings semánticos, almacenamiento en Chroma, y un LLM (google/flan-t5-large vía Hugging Face Pipeline) con un PromptTemplate que obliga a responder solo cuando el contexto es suficiente. Interfaz de prueba con Gradio. Limitación conocida: flan-t5-large tiene límite de ~512 tokens de entrada, lo que puede afectar respuestas en contextos muy largos.',
  images: chatbotLLMImages,
    technologies: [
      { name: 'Python', color: 'yellow' },
      { name: 'sentence-transformers', color: 'green' },
      { name: 'Chroma (vector DB)', color: 'purple' },
      { name: 'Hugging Face Transformers', color: 'orange' },
      { name: 'google/flan-t5-large', color: 'red' },
      { name: 'Gradio (UI)', color: 'pink' },
      { name: 'RAG (Retrieval-Augmented Generation)', color: 'teal' },
      { name: 'Docker', color: 'blue' },
      { name: 'PromptTemplate', color: 'indigo' },
    ],
    category: 'ia',
  },
];
