import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation('home');

  return (
    <div>
      <h2>{t('homePage')}</h2>
    </div>
  );
};

export default HomePage;
