import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import st from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className = '' }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(st.notFoundPage, [className])}>
      <p>{t('pageNotFound')}</p>
    </div>
  );
};
