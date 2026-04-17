import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Projects from './contents/Projects';
import Skills from './contents/Skills';
import Now from './contents/Now';
import Work from './contents/Work';
import Blog from './contents/Blog';
import Contact from './contents/Contact';

export const ThemeContext = createContext();
export const NavContext = createContext();

const PAGES = {
  home: <Home />,
  about: <About />,
  projects: <Projects />,
  skills: <Skills />,
  now: <Now />,
  work: <Work />,
  blog: <Blog />,
  contact: <Contact />,
};

function App() {
  const [theme, setTheme] = useState('dark');
  const [page, setPage] = useState('home');
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <NavContext.Provider value={{ page, setPage }}>
        <Navbar />
        <main className="main-content">
          {PAGES[page]}
        </main>
        <footer className="site-footer">
          <p>Designed & built by Joji Sebastian</p>
        </footer>
      </NavContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
