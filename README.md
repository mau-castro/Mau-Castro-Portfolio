# Mau Castro Portfolio

Proyecto frontend desarrollado con Vite, React, TypeScript y Tailwind CSS.

## 🚀 Tecnologías

- **Vite** - Build tool y dev server ultrarrápido
- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utility-first

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
├── public/          # Archivos estáticos
├── src/             # Código fuente
│   ├── assets/      # Recursos (imágenes, fuentes, etc.)
│   ├── App.tsx      # Componente principal
│   ├── main.tsx     # Punto de entrada
│   └── index.css    # Estilos globales (Tailwind)
├── index.html       # HTML principal
├── package.json     # Dependencias y scripts
├── tsconfig.json    # Configuración de TypeScript
├── vite.config.ts   # Configuración de Vite
└── tailwind.config.js # Configuración de Tailwind CSS
```

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
