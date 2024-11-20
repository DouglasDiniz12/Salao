import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Service';
import Contact from './pages/Contact';
import CorteCabelo from './pages/Corte_de_cabelo';
import Manipede from './pages/Manipede';
import Tratamento from './pages/Tratamentocap';
import Maquiagem from './pages/Maquiagem';




function App() {
  return (
    <Router>
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route  path="/corte-de-cabelo" element ={<CorteCabelo/>}/>
          <Route  path="/mani-pede" element ={<Manipede/>}/>
          <Route  path="/tratamento-cap" element ={<Tratamento/>}/>
          <Route  path="/maquiagem-a" element= {<Maquiagem/>}/>
          
        

          
          
        </Routes>
      </main>
      <Footer />
    </Router>
    
  )
}

export default App;
