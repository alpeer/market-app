import { Suspense } from 'react';
import { Footer } from "./Footer"
import { Header } from "./Header"
import "./AppShell.css"
import { Provider } from 'react-redux';
import { store } from '../store';
import { Connection } from '../../components/Connection';

export const AppShell = ({ children }) => 
  <Provider store={store}>
    <div className="App">
      <Connection/>
      <Header/>
        <Suspense fallback="loading">
          {children}
        </Suspense>
      <Footer/>
      </div>
    </Provider>