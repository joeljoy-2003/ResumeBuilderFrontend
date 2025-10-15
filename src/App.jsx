
import * as React from 'react';

import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Resumegenerator from './pages/Resumegenerator';
import Pagenotfound from './pages/Pagenotfound';
import History from './pages/History';
import Form from './pages/Form';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/resume' element={<Resumegenerator />} />
        <Route path='/form' element={<Form />} />
        <Route path='/history' element={<History />} />
        <Route path='/*' element={<Pagenotfound />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
