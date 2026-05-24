import { useLanguage } from '../hooks/useLanguage';
import { FaCode, FaDatabase, FaLayerGroup, FaNetworkWired, FaTerminal, FaTools } from 'react-icons/fa';
import {
  SiOpenjdk,
  SiSharp,
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiAngular,
  SiReact,
  SiAstro,
  SiNestjs,
  SiDotnet,
  SiElectron,
  SiReactivex,
  SiJest,
  SiJunit5,
  SiTailwindcss,
  SiSass,
  SiPostgresql,
  SiRedis,
  SiSupabase,
  SiMongodb,
  SiRabbitmq,
  SiGit,
  SiGitlab,
  SiDocker,
  SiKubernetes,
  SiPostman,
  SiIntellijidea,
  SiUnity,
  SiUnrealengine,
  SiNetlify,
} from 'react-icons/si';

export default function Skills() {
  const { t } = useLanguage();

  const categories = t('skills.categories') || [];
  
  const getCategoryIcon = (index) => {
    switch (index) {
      case 0:
        return <FaTerminal size={19} />;
      case 1:
        return <FaLayerGroup size={19} />;
      case 2:
        return <FaDatabase size={19} />;
      case 3:
        return <FaNetworkWired size={19} />;
      case 4:
        return <FaTools size={19} />;
      default:
        return <FaTerminal size={19} />;
    }
  };

  const getSkillIcon = (skillName) => {
    const name = skillName.toLowerCase();
    
    // Languages
    if (name === 'java') return <SiOpenjdk color="#E76F00" size={14} />;
    if (name === 'c#') return <SiSharp color="#239120" size={14} />;
    if (name === 'c') return <SiC color="#A8B9CC" size={14} />;
    if (name === 'c++') return <SiCplusplus color="#00599C" size={14} />;
    if (name === 'python') return <SiPython color="#3776AB" size={14} />;
    if (name === 'javascript') return <SiJavascript color="#F7DF1E" size={14} />;
    if (name === 'typescript') return <SiTypescript color="#3178C6" size={14} />;
    if (name === 'html') return <SiHtml5 color="#E34F26" size={14} />;
    if (name === 'css') return <SiCss color="#1572B6" size={14} />;
    
    // Frameworks
    if (name === 'angular') return <SiAngular color="#DD0031" size={14} />;
    if (name === 'react') return <SiReact color="#61DAFB" size={14} />;
    if (name === 'astro') return <SiAstro color="#FF5D01" size={14} />;
    if (name === 'nestjs') return <SiNestjs color="#E0234E" size={14} />;
    if (name === '.net') return <SiDotnet color="#512BD4" size={14} />;
    if (name === 'electron') return <SiElectron color="#47848F" size={14} />;
    if (name === 'wpf') return <SiDotnet color="#512BD4" size={14} />;
    if (name === 'rxjs') return <SiReactivex color="#B7178C" size={14} />;
    if (name === 'jest') return <SiJest color="#C21325" size={14} />;
    if (name === 'junit') return <SiJunit5 color="#25A1DA" size={14} />;
    if (name === 'tailwind css') return <SiTailwindcss color="#06B6D4" size={14} />;
    if (name === 'scss') return <SiSass color="#CC6699" size={14} />;
    
    // Databases
    if (name === 'postgresql') return <SiPostgresql color="#4169E1" size={14} />;
    if (name === 'redis') return <SiRedis color="#DC382D" size={14} />;
    if (name === 'supabase') return <SiSupabase color="#3ECF8E" size={14} />;
    if (name === 'mongodb') return <SiMongodb color="#47A248" size={14} />;
    
    // Architecture
    if (name === 'rabbitmq') return <SiRabbitmq color="#FF6600" size={14} />;
    
    // Tools
    if (name === 'git') return <SiGit color="#F05032" size={14} />;
    if (name === 'gitlab') return <SiGitlab color="#FC6D26" size={14} />;
    if (name === 'docker') return <SiDocker color="#2496ED" size={14} />;
    if (name === 'kubernetes') return <SiKubernetes color="#326CE5" size={14} />;
    if (name === 'postman') return <SiPostman color="#FF6C37" size={14} />;
    if (name === 'intellij') return <SiIntellijidea color="#000000" size={14} />;
    if (name === 'unity') return <SiUnity color="#FFFFFF" size={14} />;
    if (name === 'unreal engine') return <SiUnrealengine color="#313131" size={14} />;
    if (name === 'netlify') return <SiNetlify color="#00C7B7" size={14} />;
    
    return null;
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {t('skills.sectionTitle')}{' '}
          <FaCode size={24} style={{ display: 'inline-block', verticalAlign: 'middle' }} />
        </h2>

        <div className="skills-categories">
          {Array.isArray(categories) && categories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="cat-icon" style={{ display: 'flex', alignItems: 'center' }}>
                  {getCategoryIcon(index)}
                </span>
                {category.name}
              </h3>
              <div className="skill-pills">
                {Array.isArray(category.items) && category.items.map((skill) => {
                  const icon = getSkillIcon(skill);
                  return (
                    <span key={skill} className="skill-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      {icon || <span className="pill-dot" />}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
