import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './sbmain.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
