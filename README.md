# 🌟 Mau Castro Portfolio

Portfolio personal profesional desarrollado con las últimas tecnologías web.

## 🚀 Tecnologías

- **Vite** - Build tool y dev server ultrarrápido
- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utility-first

## ✨ Características

- 🌓 **Modo Oscuro/Claro** - Cambio de tema con persistencia
- 🌐 **Multiidioma** - Soporte para Español e Inglés
- 📱 **Responsive** - Diseño adaptable a todos los dispositivos
- 🎨 **Animaciones** - Transiciones y animaciones suaves
- ⚡ **Performance** - Optimizado para velocidad de carga
- 🎯 **Secciones Completas** - Hero, About, Skills, Projects, Contact

## 📦 Instalación

```bash
npm install
```

## 🛠️ Scripts Disponibles

### Desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo en `http://localhost:5173`

### Build
```bash
npm run build
```
Genera la versión de producción en la carpeta `dist/`

### Preview
```bash
npm run preview
```
Previsualiza la versión de producción localmente

### Lint
```bash
npm run lint
```
Ejecuta ESLint para verificar el código

## 📁 Estructura del Proyecto

```
.
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── Header.tsx           # Barra de navegación
│   │   ├── HeroSection.tsx      # Sección de bienvenida
│   │   ├── AboutSection.tsx     # Sección sobre mí
│   │   ├── SkillsSection.tsx    # Sección de habilidades
│   │   ├── ProjectCard.tsx      # Tarjeta de proyecto
│   │   ├── ImageCarousel.tsx    # Carrusel de imágenes
│   │   ├── CategoryTabs.tsx     # Filtros de categoría
│   │   ├── TechBadge.tsx        # Badge de tecnología
│   │   └── ContactSection.tsx   # Sección de contacto
│   ├── contexts/        # Contextos de React
│   │   ├── ThemeContext.tsx     # Contexto de tema
│   │   └── LanguageContext.tsx  # Contexto de idioma
│   ├── data/            # Datos
│   │   └── projects.ts          # Datos de proyectos
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── index.html           # HTML principal
├── package.json         # Dependencias y scripts
├── tsconfig.json        # Configuración de TypeScript
├── vite.config.ts       # Configuración de Vite
└── tailwind.config.js   # Configuración de Tailwind
```

## 🎨 Personalización

### 1. Información Personal

**Hero Section** (`src/components/HeroSection.tsx`)
- Actualiza tu nombre y título profesional en las traducciones

**About Section** (`src/components/AboutSection.tsx`)
- Reemplaza el emoji 👨‍💻 con tu foto personal
- Actualiza las estadísticas (años de experiencia, proyectos, etc.)

**Contact Section** (`src/components/ContactSection.tsx`)
- Actualiza tus enlaces de redes sociales (GitHub, LinkedIn, Email)

### 2. Traducciones

Edita `src/contexts/LanguageContext.tsx` para personalizar todos los textos:
- Sección Hero
- Sección About
- Sección Skills
- Sección Projects
- Sección Contact

### 3. Proyectos

Edita `src/data/projects.ts`:
- Reemplaza los proyectos de ejemplo con tus proyectos reales
- Actualiza imágenes, descripciones y tecnologías
- Categoriza tus proyectos (frontend, backend, fullstack)

### 4. Habilidades

Edita `src/components/SkillsSection.tsx`:
- Personaliza las habilidades y niveles según tu experiencia
- Agregar o quitar tecnologías
- Ajustar las categorías (Frontend, Backend, Tools)

### 5. Colores y Estilos

Edita `tailwind.config.js` para personalizar:
- Colores del tema
- Fuentes
- Espaciados
- Y más configuraciones de Tailwind

## 🔮 Preparado para Backend

Este proyecto está estructurado para facilitar la integración futura con un backend:

### Recomendaciones para la integración:

1. **Variables de entorno**: Crear archivo `.env` para las URLs del backend
   ```env
   VITE_API_URL=http://localhost:3000/api
   ```

2. **Servicio API**: Crear una carpeta `src/services/` para centralizar las llamadas al backend
   ```typescript
   // src/services/api.ts
   const API_URL = import.meta.env.VITE_API_URL;
   
   export const api = {
     get: async (endpoint: string) => {
       const response = await fetch(`${API_URL}${endpoint}`);
       return response.json();
     },
     // ... más métodos
   };
   ```

3. **State Management**: Considera usar:
   - React Context API (incluido)
   - Zustand (ligero)
   - Redux Toolkit (completo)
   - TanStack Query (para datos del servidor)

4. **Librerías útiles** para trabajar con backend:
   ```bash
   npm install axios          # Cliente HTTP
   npm install @tanstack/react-query  # Gestión de estado del servidor
   npm install zod            # Validación de esquemas
   ```

## 🎨 Uso de Tailwind CSS

Tailwind está configurado y listo para usar. Ejemplo:

```tsx
function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        ¡Hola Mundo!
      </h1>
    </div>
  );
}
```

## 📝 Notas

- El proyecto usa ESLint para mantener la calidad del código
- TypeScript está configurado en modo estricto
- Hot Module Replacement (HMR) está habilitado para desarrollo rápido

## 🚀 Deploy

El proyecto puede ser desplegado en:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Simplemente ejecuta `npm run build` y sube la carpeta `dist/`.
