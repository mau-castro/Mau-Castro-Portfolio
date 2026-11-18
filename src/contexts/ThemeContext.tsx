import { useLayoutEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { ThemeContext, type Theme } from './useTheme';

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => localStorage.getItem('theme') === 'light' ? 'light' : 'dark');

  useLayoutEffect(() => {
    const root = document.documentElement;
    localStorage.setItem('theme', theme);

    root.classList.toggle('dark', theme === 'dark');
    root.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggleTheme = () => setTheme(previous => previous === 'dark' ? 'light' : 'dark');

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}
