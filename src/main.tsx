import './globalStyles/normalize.css';
import './globalStyles/styles.css';
import App from './App';
import { RegisterProvider } from './features/register/context/RegisterProvider';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  //<StrictMode>
    <RegisterProvider>
      <App/>
    </RegisterProvider>
  //</StrictMode>,
)
