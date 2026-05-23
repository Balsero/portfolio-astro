import { useLanguage } from '../hooks/useLanguage';
import { FcBriefcase } from 'react-icons/fc';
import { SiAngular, SiTypescript, SiSass, SiHtml5, SiOpenjdk, SiApachemaven, SiIntellijidea, SiJunit5 } from 'react-icons/si';
import { FaShieldAlt, FaVial } from 'react-icons/fa';

function Experience() {
  const { t } = useLanguage();

  const jobs = t('experience.jobs') || [];
  
  const getTagIcon = (tagName) => {
    const name = tagName.toLowerCase();
    if (name.includes('angular')) return <SiAngular size={12} color="#DD0031" />;
    if (name.includes('typescript')) return <SiTypescript size={12} color="#3178C6" />;
    if (name.includes('scss') || name.includes('sass')) return <SiSass size={12} color="#CC6699" />;
    if (name.includes('html')) return <SiHtml5 size={12} color="#E34F26" />;
    if (name.includes('java')) return <SiOpenjdk size={12} color="#E76F00" />;
    if (name.includes('maven')) return <SiApachemaven size={12} color="#C71A36" />;
    if (name.includes('intellij')) return <SiIntellijidea size={12} color="#000000" />;
    if (name.includes('junit')) return <SiJunit5 size={12} color="#25A1DA" />;
    if (name.includes('assertj')) return <FaVial size={12} color="#10b981" />;
    if (name.includes('blanche') || name.includes('white')) return <FaShieldAlt size={12} color="#c9a050" />;
    if (name.includes('fonctionnel') || name.includes('functional')) return <FaShieldAlt size={12} color="#10b981" />;
    return null;
  };

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {t('experience.sectionTitle')}{' '}
          <FcBriefcase size={28} style={{ display: 'inline-block', verticalAlign: 'middle' }} />
        </h2>

        <div className="timeline">
          {Array.isArray(jobs) && jobs.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{job.title}</h3>
                    <span className="timeline-company">{job.company}</span>
                  </div>
                  <span className="timeline-date">{job.period}</span>
                </div>

                <ul className="timeline-details">
                  {Array.isArray(job.details) && job.details.map((detail, dIndex) => (
                    <li key={dIndex}>{detail}</li>
                  ))}
                </ul>

                <div className="timeline-tags">
                  {Array.isArray(job.tags) && job.tags.map((tag, tIndex) => {
                    const icon = getTagIcon(tag);
                    return (
                      <span key={tIndex} className="tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        {icon}
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
