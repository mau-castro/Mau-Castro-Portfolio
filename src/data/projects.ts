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

// Imágenes de Predicción de brotes de sarampión
import sarampionImg1 from '../assets/Proyectos/SarampionFase1/Imagen1.png';
import sarampionImg2 from '../assets/Proyectos/SarampionFase1/Imagen2.png';
import sarampionImg3 from '../assets/Proyectos/SarampionFase1/Imagen3.png';
import sarampionImg4 from '../assets/Proyectos/SarampionFase1/Imagen4.png';

// Imágenes de AI Agent (LLM local + RAG)
import aiAgentImg1 from '../assets/Proyectos/AIAgent/Imagen1.png';
import aiAgentImg2 from '../assets/Proyectos/AIAgent/imagen2.png';

const saviImages = [saviImg1, saviImg2, saviImg3, saviImg4, saviImg5];
const companyErpImages = [companyErpImg1, companyErpImg2, companyErpImg3, companyErpImg4, companyErpImg5];
const aedeImages = [aedeImg1, aedeImg2, aedeImg3, aedeImg4, aedeImg5];
const platafideImages = [platafideImg1];
const scrapBancoImages = [scrapBancoImg1, scrapBancoImg2];
const tumorGradeImages = [tumorGradeImg1, tumorGradeImg2];
const chatbotLLMImages = [chatbotLLMImg1];
const sarampionImages = [sarampionImg1, sarampionImg2, sarampionImg3, sarampionImg4];
const aiAgentImages = [aiAgentImg1, aiAgentImg2];

export const sampleProjects: Project[] = [
  {
    id: 1,
    title: { es: 'SAVI', en: 'SAVI' },
    description: {
      es:
        'Plataforma diseñada como un punto de venta funcional para PYMES y negocios independientes. El sistema incluye un módulo de gestión de inventario y ventas que se actualiza automáticamente en tiempo real conforme se registran las transacciones. Además, cuenta con un sistema de administración de usuarios y roles, permitiendo una gestión eficiente y segura del entorno operativo.',
      en:
        'Platform designed as a functional point of sale for SMEs and independent businesses. It includes an inventory and sales management module that updates in real time as transactions are recorded, plus a user and role management system for an efficient and secure operating environment.',
    },
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
    title: { es: 'ERP Interno Para Compañia', en: 'Company ERP' },
    description: {
      es:
        'ERP Interno Modular - Sistema de Gestión Empresarial. Plataforma empresarial escalable desarrollada con arquitectura modular para la gestión integral de procesos organizacionales. Incluye módulo de gestión de proyectos con organización jerárquica (espacios, proyectos, tareas y subtareas), sistema de autenticación y usuarios con gestión completa de permisos por departamento, y servicio de notificaciones integrado con SMTP2GO. Arquitectura técnica con Backend en FastAPI (Python), Frontend en React + TypeScript + Vite + Tailwind CSS, y PostgreSQL como base de datos, desplegado en Render.',
      en:
        'Modular Internal ERP - Enterprise Management System. Scalable enterprise platform built with a modular architecture for end-to-end process management. Includes a project management module with hierarchical organization (spaces, projects, tasks and subtasks), authentication and user system with full permission management by department, and a notifications service integrated with SMTP2GO. Technical architecture: FastAPI (Python) backend, React + TypeScript + Vite + Tailwind CSS frontend, PostgreSQL database, deployed on Render.',
    },
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
    title: { es: 'Plataforma AEDE', en: 'AEDE Platform' },
    description: {
      es:
        'Plataforma web empresarial desarrollada para la Agencia Estatal de Desarrollo Energético (AEDE), diseñada para mostrar a la ciudadania indicadores de energía importantes del Estado de Chihuahua. Integra módulos de registro con códigos QR, verificación de asistencia en tiempo real de eventos y automatizada de eventos de gran escala como el Foro de Energía 2025.',
      en:
        'Enterprise web platform developed for the State Energy Development Agency (AEDE), designed to show citizens key energy indicators of the State of Chihuahua. It integrates modules for QR-based registration, real-time attendance verification, and automation for large-scale events such as the 2025 Energy Forum.',
    },
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
    title: { es: 'Plataforma Interna Fideapech', en: 'Fideapech Internal Platform' },
    description: {
      es:
        'Plataforma web empresarial desarrollada para Fideapech diseñada para automatizar y digitalizar procesos como la automatización de contratos, proceso digital de solicitud de viaticos y vacaciones, gracias a esto se pudo agilizar la entrega de creditos en un 800%. *No se cuentan con más fotografias por temas de privacidad y seguridad de la empresa.',
      en:
        'Internal enterprise web platform developed for Fideapech to automate and digitize processes such as contract automation and digital workflows for travel and vacation requests. This helped speed up credit delivery by 800%. Note: Only one screenshot is shown due to privacy and security reasons.',
    },
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
    title: { es: 'Scraping Estados de cuentas bancarios', en: 'Scraping Bank Statements' },
    description: {
      es:
        'Librería Python modular para extraer movimientos de estados de cuenta bancarios en PDF y convertirlos en datos estructurados. Procesa automáticamente PDFs de 9 bancos mexicanos (Afirme, BBVA, BanBajío, Banorte, BanRegio, Hey Banco, Inbursa, Santander, Scotiabank) extrayendo tablas y campos clave como fecha, descripción, cargo/abono y saldo. Cada banco tiene su propio módulo adaptable, facilitando la incorporación de nuevos formatos. Utiliza pdfplumber y pymupdf para lectura de PDFs, y pandas para normalización de datos. El resultado es exportable a CSV o integrable en pipelines ETL, reduciendo horas de trabajo manual en conciliación y reporting financiero.',
      en:
        'Modular Python library to extract transactions from bank statement PDFs and convert them into structured data. Automatically processes PDFs from 9 Mexican banks (Afirme, BBVA, BanBajío, Banorte, BanRegio, Hey Banco, Inbursa, Santander, Scotiabank), extracting key fields like date, description, debit/credit and balance. Each bank has its own adaptable module, easing updates when templates change. Uses pdfplumber and PyMuPDF for PDF parsing, and pandas for normalization. Output is ready for CSV export or ETL pipelines, reducing manual reconciliation effort.',
    },
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
    title: {
      es: 'AI Agent Local con RAG',
      en: 'Local AI Agent with RAG',
    },
    description: {
      es:
        'Chatbot conversacional con arquitectura RAG ejecutada de forma local mediante Ollama, diseñado para responder preguntas con contexto documental y reducir alucinaciones. El sistema integra pipeline de ingestión, limpieza y fragmentación de documentos, generación de embeddings semánticos y recuperación por similitud en Qdrant, con control de relevancia para filtrar contexto ruidoso. Incluye API en FastAPI, persistencia de conversaciones, panel de entrenamiento para carga y administración de documentos, soporte de múltiples formatos (incluyendo OCR para PDFs escaneados) y una capa de agente con tools extensibles.',
      en:
        'Conversational chatbot powered by a fully local RAG architecture using Ollama, built to deliver context-grounded answers and reduce hallucinations. The system includes a document ingestion, cleaning, and chunking pipeline, semantic embeddings generation, and similarity retrieval in Qdrant with relevance thresholding to avoid noisy context. It provides a FastAPI backend, conversation persistence, a training panel for document upload and management, multi-format support (including OCR for scanned PDFs), and an agent layer with extensible tool execution.',
    },
    images: aiAgentImages,
    technologies: [
      { name: 'Python', color: 'yellow' },
      { name: 'FastAPI', color: 'green' },
      { name: 'Ollama', color: 'indigo' },
      { name: 'Llama 3', color: 'red' },
      { name: 'RAG', color: 'purple' },
      { name: 'Qdrant', color: 'cyan' },
      { name: 'PostgreSQL', color: 'blue' },
      { name: 'React', color: 'cyan' },
      { name: 'OCR', color: 'pink' },
    ],
    category: 'ia',
  },
  {
    id: 7,
    title: { es: 'Predicción de Clasificación de Gliomas (AI/MLOps)', en: 'Glioma Grade Classification (AI/MLOps)' },
    description: {
      es:
        'API y conjunto de prácticas MLOps para la clasificación automática del grado de gliomas (bajo/alto) basada en datos clínicos y mutaciones genéticas. No es una plataforma de usuario completa: el proyecto está pensado como una API reproducible y rastreable que ofrece endpoints para inferencia, gestión de modelos y registro de experimentos. Incluye un pipeline (preprocesamiento, entrenamiento y validación) con MLflow para seguimiento y versionado. Modelos usados: Decision Tree (precisión reportada: 95%), Random Forest y Logistic Regression. La API se implementa con FastAPI y el servicio se empaqueta en Docker para despliegue portátil. Se incorporan pruebas unitarias (ipytest) y prácticas de gobernanza y privacidad (GDPR/CCPA) para manejo seguro de datos clínicos.',
      en:
        'API and MLOps practices for automatic glioma grade classification (low/high) based on clinical data and genetic mutations. It is not a full end-user platform: the project is a reproducible, traceable API exposing endpoints for inference, model management, and experiment tracking. Includes a pipeline (preprocessing, training and validation) with MLflow for tracking and versioning. Models used: Decision Tree (reported accuracy: 95%), Random Forest, and Logistic Regression. The API is built with FastAPI and packaged with Docker for portable deployment. Unit tests (ipytest) and data governance and privacy practices (GDPR/CCPA) are included.',
    },
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
    id: 8,
    title: { es: 'Chatbot Especializado en Farmacología (LLM + RAG)', en: 'Pharmacology Chatbot (LLM + RAG)' },
    description: {
      es:
        'Sistema conversacional Q&A diseñado para consultar información técnica de farmacología a partir de documentación interna. Implementa una arquitectura Retrieval-Augmented Generation (RAG) que recupera fragmentos relevantes de documentos y los utiliza como contexto para un LLM, asegurando respuestas fundamentadas y reduciendo alucinaciones. El pipeline incluye ingestión y chunking de PDFs, generación de embeddings semánticos, almacenamiento en Chroma, y un LLM (google/flan-t5-large vía Hugging Face Pipeline) con un PromptTemplate que obliga a responder solo cuando el contexto es suficiente. Interfaz de prueba con Gradio. Limitación conocida: flan-t5-large tiene límite de ~512 tokens de entrada, lo que puede afectar respuestas en contextos muy largos.',
      en:
        'Conversational Q&A system designed to query technical pharmacology information from internal documentation. It implements a Retrieval-Augmented Generation (RAG) architecture that retrieves relevant document chunks and uses them as context for an LLM, ensuring grounded answers and reducing hallucinations. The pipeline includes PDF ingestion and chunking, semantic embeddings generation, storage in Chroma, and an LLM (google/flan-t5-large via Hugging Face Pipeline) with a PromptTemplate that forces answering only when context is sufficient. Interactive UI with Gradio. Known limitation: flan-t5-large has an input limit of ~512 tokens, which can affect responses for very long contexts.',
    },
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
  {
    id: 9,
    title: {
      es: 'Predicción de brotes de sarampión en México (2010-2023)',
      en: 'Prediction of Measles Outbreaks in Mexico (2010-2023)',
    },
    description: {
      es:
        'El sarampión, a pesar de estar incluido en los programas de vacunación, continúa representando una amenaza debido a la disminución en la cobertura de vacunación y la movilidad de la población. El objetivo fue desarrollar un modelo de Machine Learning capaz de anticipar brotes epidemiológicos utilizando datos públicos disponibles de manera responsable y acorde a su alcance real. Se busca apoyar la toma de decisiones preventivas que ayuden a evitar muertes y complicaciones en la población más vulnerable (niños menores de 5 años).',
      en:
        'Measles, despite being included in vaccination programs, continues to pose a threat due to declining vaccination coverage and population mobility. The goal was to develop a Machine Learning model capable of anticipating epidemiological outbreaks using publicly available data in a responsible manner and aligned with its real scope. The aim is to support preventive decision-making that can help avoid deaths and complications in the most vulnerable population (children under 5 years old).',
    },
    images: sarampionImages,
    technologies: [
      { name: 'Python', color: 'yellow' },
      { name: 'FastAPI', color: 'green' },
      { name: 'MLOps', color: 'purple' },
      { name: 'Prediction Models', color: 'indigo' },
      { name: 'Data Engineering', color: 'cyan' },
    ],
    category: 'ia',
  },
];
