import { routes } from '../routes';
import type { LocalizedString } from '../components/ProjectCard';

export interface ProjectCaseStudy {
  path: string;
  summary: LocalizedString;
  problem: LocalizedString;
  role: LocalizedString;
  result: LocalizedString;
}

export const erpCase: ProjectCaseStudy = {
  path: routes.erp,
  summary: {
    es: 'Sistema modular para organizar proyectos, tareas, permisos y notificaciones en una empresa.',
    en: 'A modular system for managing company projects, tasks, permissions, and notifications.',
  },
  problem: {
    es: 'La operación necesitaba un espacio común para dar seguimiento a proyectos y tareas, con distintos niveles de acceso según el departamento.',
    en: 'The company needed a shared workspace to track projects and tasks, with access levels that varied by department.',
  },
  role: {
    es: 'Desarrollé la plataforma full stack y su arquitectura modular. Implementé la API en FastAPI, la interfaz en React y TypeScript, y la persistencia en PostgreSQL.',
    en: 'I built the full-stack platform and its modular architecture, using FastAPI for the API, React and TypeScript for the interface, and PostgreSQL for storage.',
  },
  result: {
    es: 'El ERP reúne espacios, proyectos, tareas y subtareas en una jerarquía. Incorpora autenticación, permisos por departamento y notificaciones por correo mediante SMTP2GO. La plataforma se desplegó en Render.',
    en: 'The ERP organizes spaces, projects, tasks, and subtasks in a hierarchy. It includes authentication, department-level permissions, and email notifications through SMTP2GO. The platform was deployed on Render.',
  },
};

export const aedeCase: ProjectCaseStudy = {
  path: routes.aede,
  summary: {
    es: 'Portal de indicadores energéticos de Chihuahua y gestión de eventos con registro y asistencia por QR.',
    en: 'A portal for Chihuahua’s energy indicators and event management with QR registration and check-in.',
  },
  problem: {
    es: 'La Agencia Estatal de Desarrollo Energético necesitaba publicar indicadores para la ciudadanía y gestionar el registro y la asistencia a sus eventos.',
    en: 'The State Energy Development Agency needed to publish indicators for the public and manage event registration and attendance.',
  },
  role: {
    es: 'Desarrollé la plataforma web y los módulos de registro y asistencia. Integré códigos QR para validar a las personas registradas y consultar las asistencias conforme se registraban.',
    en: 'I developed the web platform and its registration and attendance modules. I integrated QR codes to check in registered attendees and surface attendance as it was recorded.',
  },
  result: {
    es: 'El portal reúne indicadores energéticos y permite gestionar el ciclo de registro y asistencia para eventos como el Foro de Energía 2025.',
    en: 'The portal brings energy indicators together and supports registration and attendance workflows for events such as the 2025 Energy Forum.',
  },
};

export const localAiCase: ProjectCaseStudy = {
  path: routes.localAi,
  summary: {
    es: 'Asistente que responde preguntas sobre documentación interna con un modelo local en Ollama.',
    en: 'An assistant that answers questions about internal documents using a local model in Ollama.',
  },
  problem: {
    es: 'Consultar información repartida en varios documentos requiere tiempo. El reto era recuperar los fragmentos pertinentes, incluidos los de PDF escaneados, para dar contexto al modelo.',
    en: 'Searching across multiple documents takes time. The challenge was to retrieve relevant passages, including from scanned PDFs, to give the model context.',
  },
  role: {
    es: 'Implementé el procesamiento de documentos y el OCR, la búsqueda semántica con Qdrant y la ejecución local del modelo con Ollama. Integré el flujo en una API FastAPI y una interfaz en React.',
    en: 'I implemented document processing and OCR, semantic search with Qdrant, and local model execution with Ollama. I integrated the workflow into a FastAPI backend and a React interface.',
  },
  result: {
    es: 'El asistente permite cargar documentos, gestionar conversaciones y formular preguntas con contexto recuperado de los archivos. Un filtro de relevancia ayuda a descartar fragmentos poco relacionados antes de generar la respuesta.',
    en: 'The assistant supports document uploads, conversation history, and questions grounded in retrieved context. A relevance filter helps discard unrelated passages before generating an answer.',
  },
};

export const memoryGendaCase: ProjectCaseStudy = {
  path: routes.memoryGenda,
  summary: {
    es: 'Agenda de voz para Android y Wear OS con sincronización, transcripción y resúmenes en el dispositivo.',
    en: 'A voice notebook for Android and Wear OS with sync, on-device transcription, and summaries.',
  },
  problem: {
    es: 'Quería pasar de una idea grabada en el reloj a una nota que pudiera leer y organizar en el teléfono, con la opción de procesar el audio en el propio dispositivo.',
    en: 'I wanted to turn ideas recorded on a watch into readable, organized notes on a phone, with the option to process audio on the device.',
  },
  role: {
    es: 'Desarrollé las aplicaciones de Android y Wear OS en Kotlin y Jetpack Compose. Implementé la transferencia de audio por segmentos e integré modelos locales para transcribir y proponer resúmenes.',
    en: 'I built the Android and Wear OS apps in Kotlin and Jetpack Compose, implemented segmented audio transfer, and integrated local models for transcription and suggested summaries.',
  },
  result: {
    es: 'La app permite grabar en el reloj o en el teléfono, sincronizar las grabaciones al móvil y transcribirlas ahí. Con Qwen3 opcional, cada grabación puede tener un título y un resumen que se revisan y editan antes de guardar.',
    en: 'The app records on the watch or phone, syncs recordings to the phone, and transcribes them there. An optional Qwen3 model suggests titles and summaries that can be reviewed and edited before saving.',
  },
};
