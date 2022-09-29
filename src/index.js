import React from 'react'
import { createRoot } from 'react-dom/client'
import { AppShell } from './app/index'
import { Products } from './pages'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { ToastContainer } from 'react-toastify'
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppShell>
      <Products />
      <ToastContainer autoClose={5000} position="top-left" pauseOnHover />
    </AppShell>
  </React.StrictMode >
);


serviceWorkerRegistration.register();
