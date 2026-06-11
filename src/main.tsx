import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Safely suppress annoying and benign development WebSocket/Vite errors in the sandbox
if (typeof window !== 'undefined') {
  const suppressDevErrors = (event: ErrorEvent | PromiseRejectionEvent) => {
    const message = 'reason' in event 
      ? (event.reason?.message || String(event.reason || '')) 
      : (event.message || '');
      
    if (
      message.toLowerCase().includes('websocket') || 
      message.toLowerCase().includes('vite') ||
      message.toLowerCase().includes('failed to connect to websocket') ||
      message.includes('WebSocket closed without opened')
    ) {
      // Prevent browser console noise and standard popup logging
      event.preventDefault();
      event.stopPropagation();
    }
  };

  window.addEventListener('error', suppressDevErrors, true);
  window.addEventListener('unhandledrejection', suppressDevErrors, true);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
