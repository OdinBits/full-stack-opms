import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store.ts';
// import AxiosApiInterceptor from './services/axios/AxiosApiInterceptor.tsx';
import App from './App.tsx';
import './styles/index.css';
import { StyledEngineProvider } from '@mui/material';
import DeduplicationProvider from './layouts/DeduplicationProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <DeduplicationProvider>
            <StyledEngineProvider injectFirst>
              {/* <AxiosApiInterceptor /> */}
              <App />
            </StyledEngineProvider>
          </DeduplicationProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
