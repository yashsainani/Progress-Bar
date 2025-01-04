import {createRoot} from 'react-dom/client';
import { StrictMode } from 'react';
import styles from './index.module.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);