import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div>
      <h2>{t('aboutPage')}</h2>
    </div>
  );
};

export default AboutPage;
