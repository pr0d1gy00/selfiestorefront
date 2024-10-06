import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globalStyles/normalize.css';
import './globalStyles/styles.css';
import Header from './features/ui/header/components/Header';
import ShowProducts from './features/products/components/ShowProducts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <ShowProducts />
  </StrictMode>,
)
