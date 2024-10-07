import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globalStyles/normalize.css';
import './globalStyles/styles.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <App/>
  </StrictMode>,
)
