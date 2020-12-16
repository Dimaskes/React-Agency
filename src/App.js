import React from 'react';

import { Header } from './components';
import { Home } from './pages';

//import './scss/app.scss';

export default function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Home />
    </div>
  );
}
