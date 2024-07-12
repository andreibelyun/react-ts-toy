import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary/ui/BugButton';

const HomePage = () => {
  const { t } = useTranslation('home');

  return (
    <div>
      <h2>{t('homePage')}</h2>
      <BugButton />
    </div>
  );
};

export default HomePage;
