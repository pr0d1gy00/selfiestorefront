import { createRoot } from 'react-dom/client'
import './globalStyles/normalize.css';
import './globalStyles/styles.css';
import App from './App';
import { RegisterProvider } from './features/register/context/RegisterProvider';

createRoot(document.getElementById('root')!).render(
  
  //<StrictMode>
    <RegisterProvider>
      <App/>
    </RegisterProvider>
  //</StrictMode>,
)
