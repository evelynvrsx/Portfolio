import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

// import pages
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
        <section id="footer"><Footer/></section>
      </main>
    </div>
  );
}

export default App;
