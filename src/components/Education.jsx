import { useLanguage } from '../hooks/useLanguage';
import { FaGraduationCap, FaUserGraduate } from 'react-icons/fa';

function Education() {
  const { t } = useLanguage();

  const degrees = t('education.degrees') || [];
  
  const getIcon = (index) => {
    switch (index) {
      case 0:
        return <FaGraduationCap size={42} />;
      case 1:
        return <FaUserGraduate size={40} />;
      default:
        return <FaGraduationCap size={42} />;
    }
  };

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {t('education.sectionTitle')}{' '}
          <FaGraduationCap size={24} style={{ display: 'inline-block', verticalAlign: 'middle' }} />
        </h2>

        <div className="education-grid">
          {Array.isArray(degrees) && degrees.map((item, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">{getIcon(index)}</div>
              <h3 className="education-degree">{item.degree}</h3>
              <p className="education-school">{item.school}</p>
              <span className="education-date">{item.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
