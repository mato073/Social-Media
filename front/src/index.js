import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PersistGate } from 'redux-persist/es/integration/react'
import { persistStore } from 'redux-persist'
import Store from './redux/Store'
import { Provider as ReduxProvider } from 'react-redux'

const persistor = persistStore(Store);

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={Store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
