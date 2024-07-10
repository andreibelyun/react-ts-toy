import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from 'shared/config/router/routerConfig';
import { PageLoader } from 'widgets/PageLoader';

export function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routerConfig).map((routeProps) => (
          <Route key={routeProps.path} {...routeProps} />
        ))}
      </Routes>
    </Suspense>
  );
}
