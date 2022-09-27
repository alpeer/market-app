import React from 'react'
import { createRoot } from 'react-dom/client'
import { AppShell } from './app/index'
import { Products } from './pages'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppShell>
      <Products />
    </AppShell>
  </React.StrictMode >
);


serviceWorkerRegistration.register();
