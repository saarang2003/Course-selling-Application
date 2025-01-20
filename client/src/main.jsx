import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Toaster } from './components/ui/sonner';
import { BrowserRouter } from 'react-router';
import { useLoadUserQuery } from './feature/api/authApi';
import LoadingSpinner from './components/Spinner';

const Custom = ({ children }) => {
  const { isLoading } = useLoadUserQuery();
  return <>{isLoading ? <LoadingSpinner /> : children}</>;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Custom>
        <App />
        <Toaster />
      </Custom>
    </Provider>
  </StrictMode>
);
