import { useLanguage } from '../hooks/useLanguage';
import { FcInvite, FcAddressBook } from 'react-icons/fc';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const { t, currentLang } = useLanguage();

  const contactItems = [
    {
      icon: <FcAddressBook size={28} />,
      label: currentLang === 'en' ? 'Email' : 'Courriel',
      value: 'jonathan.rodrigueztames@gmail.com',
      href: 'mailto:jonathan.rodrigueztames@gmail.com',
      fullWidth: true,
    },
    {
      icon: <FaLinkedin size={28} color="#0A66C2" />,
      label: 'LinkedIn',
      value: 'jonasrodriguezt',
      href: 'https://www.linkedin.com/in/jonasrodriguezt',
      external: true,
    },
    {
      icon: <SiGithub size={28} color="#f0ece4" />,
      label: 'GitHub',
      value: 'Balsero',
      href: 'https://github.com/Balsero',
      external: true,
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {t('contact.sectionTitle')}{' '}
          <FcInvite size={28} style={{ display: 'inline-block', verticalAlign: 'middle' }} />
        </h2>

        <div className="contact-content">
          <p className="contact-text">{t('contact.subtitle')}</p>

          <div className="contact-links">
            {contactItems.map((item, index) => (
              <a
                key={index}
                className="contact-card"
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                style={item.fullWidth ? { gridColumn: '1 / -1' } : {}}
              >
                <span className="contact-card-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </span>
                <span className="contact-card-label">{item.label}</span>
                <span className="contact-card-value">{item.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
