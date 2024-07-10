import 'app/styles/index.scss';

import { Suspense } from 'react';
import { NavBar } from 'widgets/NavBar';
import { AppRouter } from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { SideBar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback={<PageLoader />}>
        <NavBar />

        <div className="pageContent">
          <SideBar />

          <div className="pageWrapper">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
