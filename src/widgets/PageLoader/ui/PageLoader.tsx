import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';

import st from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className = '' }) => {
  return (
    <div className={classNames(st.pageLoader, [className])}>
      <Loader />
    </div>
  );
};
