import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "shared/config/router/routerConfig";

export function AppRouter() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        {Object.values(routerConfig).map((routeProps) => (
          <Route key={routeProps.path} {...routeProps} />
        ))}
      </Routes>
    </Suspense>
  );
}
