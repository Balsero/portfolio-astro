import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

function Navbar() {
  const { t, currentLang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#education', label: t('nav.education') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="nav-logo" onClick={(e) => handleNavClick(e, '#hero')}>
          <span className="bracket">&lt;</span>
          <span>JRT</span>
          <span className="bracket">/&gt;</span>
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button className="lang-toggle" onClick={toggleLang}>
            {currentLang === 'en' ? '🇫🇷 FR' : '🇬🇧 EN'}
          </button>
        </div>

        <div className="nav-right-mobile">
          <button className="lang-toggle" onClick={toggleLang}>
            {currentLang === 'en' ? '🇫🇷 FR' : '🇬🇧 EN'}
          </button>
          <button
            className={`nav-toggle${menuOpen ? ' active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
