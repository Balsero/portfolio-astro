import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { typewriterPhrases } from '../i18n/translations';
import { FcMusic, FcFlashOn } from 'react-icons/fc';
import { SiAngular } from 'react-icons/si';
import { FaGamepad, FaLaptopCode, FaGraduationCap, FaTv, FaSkull } from 'react-icons/fa';

function Hero() {
  const { t, currentLang } = useLanguage();
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  // Reset typewriter when language changes
  useEffect(() => {
    setDisplayText('');
    setPhraseIndex(0);
    setIsDeleting(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, [currentLang]);

  useEffect(() => {
    const phrases = typewriterPhrases[currentLang] || [];
    if (phrases.length === 0) return;

    const currentPhrase = phrases[phraseIndex % phrases.length];

    const tick = () => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
          timeoutRef.current = setTimeout(tick, 80);
        } else {
          // Pause before deleting
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
          timeoutRef.current = setTimeout(tick, 40);
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? 40 : 80);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, phraseIndex, currentLang]);

  // Generate particles
  const particles = Array.from({ length: 30 }, (_, i) => {
    const colors = [
      'rgba(201,160,80,0.6)',
      'rgba(232,213,181,0.4)',
      'rgba(245,158,11,0.4)',
    ];
    return {
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 2}px`,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: `${Math.random() * 10 + 10}s`,
      delay: `${Math.random() * 10}s`,
    };
  });

  const getPhraseIcon = (index) => {
    switch (index % 6) {
      case 0: // Frontend Developer
        return <FaLaptopCode size={20} color="#61DAFB" style={{ display: 'inline-block', flexShrink: 0 }} />;
      case 1: // Game Developer
        return <FaGamepad size={22} color="#ffb300" style={{ display: 'inline-block', flexShrink: 0 }} />;
      case 2: // Musician
        return <FcMusic size={22} style={{ display: 'inline-block', flexShrink: 0 }} />;
      case 3: // Software Engineering Student
        return <FaGraduationCap size={20} color="#c9a050" style={{ display: 'inline-block', flexShrink: 0 }} />;
      case 4: // Anime Lover
        return <FaTv size={18} color="#e8d5b5" style={{ display: 'inline-block', flexShrink: 0 }} />;
      case 5: // Souls-like Enthusiast
        return <FaSkull size={18} color="#c9a050" style={{ display: 'inline-block', flexShrink: 0 }} />;
      default:
        return null;
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-particles">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">
              {t('hero.greeting')} <FcFlashOn size={18} style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '4px' }} />
            </p>

            <h1 className="hero-name">
              <span className="name-line">Jonathan</span>
              <span className="name-line highlight">Rodriguez</span>
              <span className="name-line">Tames</span>
            </h1>

            <div className="hero-typewriter" style={{ display: 'flex', alignItems: 'center', gap: '8px', minHeight: '36px' }}>
              {getPhraseIcon(phraseIndex)}
              <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                <span>{displayText}</span>
                <span className="cursor"></span>
              </div>
            </div>

            <p className="hero-description">{t('hero.description')}</p>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary">
                {t('nav.projects')} <span className="arrow">→</span>
              </a>
              <a href="#contact" className="btn btn-outline">
                {t('nav.contact')}
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="avatar-container">
              <div className="avatar-ring"></div>
              <img src="/photo.jpg" alt="Jonathan Rodriguez Tames" className="avatar-img" />
              
              <div className="floating-badge badge-1">
                <FaGraduationCap size={14} color="#c9a050" />
                <span className="badge-text">{t('hero.badges.0') || 'Lab Instructor'}</span>
              </div>
              <div className="floating-badge badge-2">
                <FaGamepad size={14} color="#ffb300" />
                <span className="badge-text">{t('hero.badges.1') || 'Game Dev'}</span>
              </div>
              <div className="floating-badge badge-3">
                <FcMusic size={16} />
                <span className="badge-text">{t('hero.badges.2') || 'Musician'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
