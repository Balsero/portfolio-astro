import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { FcOpenedFolder, FcMusic, FcIdea, FcFlashOn } from 'react-icons/fc';
import { FaGamepad } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import {
  SiAngular,
  SiTypescript,
  SiSass,
  SiNestjs,
  SiMongodb,
  SiSpotify,
  SiReact,
  SiJavascript,
  SiCss,
  SiSupabase,
  SiPostgresql,
  SiUnity,
  SiSharp,
} from 'react-icons/si';

function ProjectCard({ project, index, isFeatured, getProjectIcon, getTechIcon }) {
  const { currentLang } = useLanguage();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div
      className={`project-card${isFeatured ? ' featured' : ''}`}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Card content overlay wrapper */}
      <div className="project-card-content">
        {/* Dedicated video area at the top of the card if the project has a video */}
        {project.hasVideo && project.video && (
          <div className="project-card-media">
            <video
              ref={videoRef}
              src={project.video}
              loop
              muted
              playsInline
              autoPlay
              className="project-media-video"
            />
          </div>
        )}

        <div className="project-header">
          <span className="project-icon" style={{ display: 'flex', alignItems: 'center' }}>
            {getProjectIcon(index)}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {project.status && (
              <span className="project-status status-active">
                {project.status}
              </span>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-status status-completed project-header-link"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', textDecoration: 'none' }}
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink size={11} />
                {project.status && (project.status.toLowerCase().includes('jam') || project.status.toLowerCase().includes('jeu'))
                  ? (currentLang === 'en' ? 'Play' : 'Jouer')
                  : (currentLang === 'en' ? 'Link' : 'Lien')}
              </a>
            )}
          </div>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech" style={{ marginTop: 'auto', paddingTop: '16px' }}>
          {Array.isArray(project.tech) && project.tech.map((tech) => {
            const icon = getTechIcon(tech);
            return (
              <span key={tech} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                {icon}
                {tech}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  const items = t('projects.items') || [];
  
  // Tag each item with its original index before separating so icons render correctly
  const projectsWithIndex = Array.isArray(items) 
    ? items.map((project, index) => ({ ...project, originalIndex: index }))
    : [];

  const softwareProjects = projectsWithIndex.filter(project => !project.hasVideo);
  const gameProjects = projectsWithIndex.filter(project => project.hasVideo);
  
  const getProjectIcon = (index) => {
    switch (index) {
      case 0:
        return <FcMusic size={32} />;
      case 1:
        return <FcIdea size={32} />;
      case 2:
        return <FaGamepad size={32} color="#ffb300" />;
      case 3:
        return <FcFlashOn size={32} />;
      default:
        return <FcOpenedFolder size={32} />;
    }
  };

  const getTechIcon = (techName) => {
    const name = techName.toLowerCase();
    if (name.includes('angular')) return <SiAngular size={12} color="#DD0031" />;
    if (name.includes('typescript')) return <SiTypescript size={12} color="#3178C6" />;
    if (name.includes('sass') || name.includes('scss')) return <SiSass size={12} color="#CC6699" />;
    if (name.includes('nestjs')) return <SiNestjs size={12} color="#E0234E" />;
    if (name.includes('mongodb')) return <SiMongodb size={12} color="#47A248" />;
    if (name.includes('spotify')) return <SiSpotify size={12} color="#1DB954" />;
    if (name.includes('react')) return <SiReact size={12} color="#61DAFB" />;
    if (name.includes('javascript')) return <SiJavascript size={12} color="#F7DF1E" />;
    if (name.includes('css')) return <SiCss size={12} color="#1572B6" />;
    if (name.includes('supabase')) return <SiSupabase size={12} color="#3ECF8E" />;
    if (name.includes('postgresql')) return <SiPostgresql size={12} color="#4169E1" />;
    if (name.includes('unity')) return <SiUnity size={12} color="#FFFFFF" />;
    if (name.includes('c#')) return <SiSharp size={12} color="#239120" />;
    return null;
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {t('projects.sectionTitle')}{' '}
          <FcOpenedFolder size={28} style={{ display: 'inline-block', verticalAlign: 'middle' }} />
        </h2>

        {/* Software & Web Applications */}
        {softwareProjects.length > 0 && (
          <div className="projects-subsection" style={{ marginTop: '20px' }}>
            <h3 className="projects-subsection-title">
              {t('projects.softwareTitle')}
            </h3>
            <div className="projects-grid">
              {softwareProjects.map((project) => (
                <ProjectCard
                  key={project.originalIndex}
                  project={project}
                  index={project.originalIndex}
                  isFeatured={project.originalIndex === 0} // highlight Repertory Planner
                  getProjectIcon={getProjectIcon}
                  getTechIcon={getTechIcon}
                />
              ))}
            </div>
          </div>
        )}

        {/* Video Games */}
        {gameProjects.length > 0 && (
          <div className="projects-subsection" style={{ marginTop: '60px' }}>
            <h3 className="projects-subsection-title">
              {t('projects.gamesTitle')}
            </h3>
            <div className="projects-grid">
              {gameProjects.map((project) => (
                <ProjectCard
                  key={project.originalIndex}
                  project={project}
                  index={project.originalIndex}
                  isFeatured={false} // keep both games identical for perfect symmetry
                  getProjectIcon={getProjectIcon}
                  getTechIcon={getTechIcon}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
