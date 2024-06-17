import "app/styles/index.scss";

import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { HomePage } from "pages/HomePage";
import { AboutPage } from "pages/AboutPage";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <header>
        <button onClick={toggleTheme}>Toggle theme</button>
        <br />
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </header>

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
