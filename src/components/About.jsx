import { useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { FaBolt, FaGamepad, FaGlobeAmericas, FaMusic, FaUserSecret } from 'react-icons/fa';

function About() {
  const { t } = useLanguage();

  const paragraphs = t('about.paragraphs') || [];
  const funFacts = t('about.funFacts.items') || [];
  
  // Map index to a Flat Color Icon or FontAwesome icon
  const getIcon = (index) => {
    switch (index) {
      case 0:
        return <FaGamepad size={24} color="#c9a050" />;
      case 1:
        return <FaGlobeAmericas size={24} color="#e8d5b5" />;
      case 2:
        return <FaMusic size={24} color="#c9a050" />;
      case 3:
        return <FaBolt size={23} color="#e8d5b5" />;
      default:
        return <FaUserSecret size={24} color="#c9a050" />;
    }
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {t('about.sectionTitle')}{' '}
          <FaUserSecret size={24} style={{ display: 'inline-block', verticalAlign: 'middle' }} />
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
