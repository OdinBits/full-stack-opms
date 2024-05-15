import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from './store';
import { persistor } from './store/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const combinedElements = (
  <Provider store={store} >
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </Provider>
)
root.render(combinedElements);

reportWebVitals();
