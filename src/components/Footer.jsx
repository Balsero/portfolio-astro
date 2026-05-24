import { useLanguage } from '../hooks/useLanguage';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  const { t } = useLanguage();
  const credit = t('footer.credit') || '';
  const parts = credit.split('[heart]');

  return (
    <footer className="footer">
      <div className="container">
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
          {parts[0]}
          <FaHeart className="heart" size={14} style={{ display: 'inline-block' }} />
          {parts[1]}
        </p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
