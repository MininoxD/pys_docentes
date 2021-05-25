import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from './store';
const firebase = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG)
ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebase} suspense={true}>
    <Suspense fallback={'cargandoooooo'}>
      <Provider store={store}>
        <PersistGate loading={<p>Cargandooo</p>} persistor={persistor}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </PersistGate>
      </Provider>
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
