import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import { currentRoute, routes, siteUrl } from './routes'

const profileSection = window.location.hash;

if (currentRoute() === routes.home && ['#about', '#skills'].includes(profileSection)) {
  window.history.replaceState(window.history.state, '', siteUrl(`${routes.profile}${profileSection}`));
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
)
