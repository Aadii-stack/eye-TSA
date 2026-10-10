import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import MetaSummit from './pages/MetaSummit';
import NotFound from './pages/NotFound';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Background ambient circuit grid */}
      <div className="circuit-canvas-bg" aria-hidden="true"></div>

      <div className="app-wrapper">
        <Navbar />

        <main className="main-content" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/meta-summit" element={<MetaSummit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
