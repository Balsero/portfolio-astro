import { useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { FcAbout, FcGlobe, FcMusic, FcFlashOn } from 'react-icons/fc';
import { FaGamepad } from 'react-icons/fa';

function About() {
  const { t } = useLanguage();

  const paragraphs = t('about.paragraphs') || [];
  const funFacts = t('about.funFacts.items') || [];
  
  // Map index to a Flat Color Icon or FontAwesome icon
  const getIcon = (index) => {
    switch (index) {
      case 0:
        return <FaGamepad size={26} color="#ffb300" />;
      case 1:
        return <FcGlobe size={28} />;
      case 2:
        return <FcMusic size={28} />;
      case 3:
        return <FcFlashOn size={28} />;
      default:
        return <FcAbout size={28} />;
    }
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {t('about.sectionTitle')}{' '}
          <FcAbout size={28} style={{ display: 'inline-block', verticalAlign: 'middle' }} />
        </h2>

        <div className="about-grid">
          <div className="about-text">
            {Array.isArray(paragraphs) && paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>

          <div className="about-fun-facts">
            <h3 className="fun-facts-title">{t('about.funFacts.title')}</h3>
            <div className="fun-fact-cards">
              {Array.isArray(funFacts) && funFacts.map((fact, index) => (
                <FunFactCard key={index} icon={getIcon(index)} text={fact.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FunFactCard({ icon, text }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    cardRef.current.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div
      ref={cardRef}
      className="fun-fact-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="fun-fact-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</span>
      <p>{text}</p>
    </div>
  );
}

export default About;
