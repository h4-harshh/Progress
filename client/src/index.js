import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import { ThemeProvider } from '@material-tailwind/react';
import { Provider } from "react-redux";
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
