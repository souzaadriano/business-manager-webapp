import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Bootstrap } from './core/factories/bootstrap.engine.ts';

import { UserContextProvider } from './context/index.ts';
import { LayoutContextProvider } from './context/layout/layout-provider.context.tsx';
import { RequestHandlerFactory, StorageHandlerFactory, UserRepositoryFactory } from './core/factories/index.ts';
import './index.css';

// Handlers
Bootstrap.add(RequestHandlerFactory);
Bootstrap.add(StorageHandlerFactory);

//Repositries
Bootstrap.add(UserRepositoryFactory);

// Initialize Boostrap
Bootstrap.init();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LayoutContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </LayoutContextProvider>
  </React.StrictMode>,
);
