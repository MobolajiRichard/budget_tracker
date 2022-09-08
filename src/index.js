import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Providers } from './Componenents/Context/Context';
import {Provider} from 'react-redux'
import {SpeechProvider} from '@speechly/react-client'
import { store } from './Componenents/redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import {
  persistStore
} from 'redux-persist'


let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
    <SpeechProvider  appId="0c36c80a-8c5d-47b7-88d8-1f47a5ea1c7d" language="en-US">
      <Providers>
        <App />            
      </Providers>
    </SpeechProvider>
    </Provider>
    </PersistGate>
  </React.StrictMode>
);
