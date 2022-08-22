import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from './Componenents/Context/Context';
import {SpeechProvider} from '@speechly/react-client'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SpeechProvider  appId="0c36c80a-8c5d-47b7-88d8-1f47a5ea1c7d" language="en-US">
      <Provider>
        <App />            
      </Provider>
    </SpeechProvider>
  </React.StrictMode>
);
