import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Achievements from './components/Achievements';

function App() {
  const [showScroll, setShowScroll] = React.useState(false);

  React.useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen relative overflow-x-hidden w-full">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Achievements />
      <Projects />
      <Contact />
      <Footer />

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 p-4 bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 z-50 hover:bg-blue-700 hover:scale-110 ${showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Back to Top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </div>
  );
}

export default App;
