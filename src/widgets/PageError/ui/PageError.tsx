import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import st from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(st.pageError, [className])}>
      <h2>{t('unknownError')}</h2>
      <button className={st.reloadBtn} type="button" onClick={reloadPage}>
        {t('reloadPage')}
      </button>
    </div>
  );
};
