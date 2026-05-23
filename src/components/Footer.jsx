import { useLanguage } from '../hooks/useLanguage';
import { FcLike } from 'react-icons/fc';

export default function Footer() {
  const { t } = useLanguage();
  const credit = t('footer.credit') || '';
  const parts = credit.split('[heart]');

  return (
    <footer className="footer">
      <div className="container">
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
          {parts[0]}
          <FcLike className="heart" size={16} style={{ display: 'inline-block' }} />
          {parts[1]}
        </p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
