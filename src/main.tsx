import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/reset.css";
import "./styles/global.css";
import { ThemeProvider } from './providers/ThemeProvider';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light">
      <App />
    </ThemeProvider>
  </StrictMode>,
)
